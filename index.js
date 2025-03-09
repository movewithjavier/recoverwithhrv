/**
 * Main Application Entry Point
 * Works in both local development and Replit environments
 */

// Load environment variables
require('dotenv').config();

// Express app setup
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * File serving configuration:
 * - Main landing page (index.html) is served from the root directory
 * - All other pages (book.html, thank-you.html, etc.) are in the pages/ directory
 * - Assets (css, js, assets) are referenced from the root
 */

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve files from the pages directory
app.use('/pages', express.static(path.join(__dirname, 'pages')));

// Handle routes for cleaner URLs
app.get('/book', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'book.html'));
});

app.get('/thank-you', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'thank-you.html'));
});

app.get('/rolly', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'rolly.html'));
});

// Legacy support for .html extensions
app.get('/book.html', (req, res) => {
  res.redirect('/book');
});

app.get('/thank-you.html', (req, res) => {
  res.redirect('/thank-you');
});

// Legacy support for any other HTML files that might be moved
app.get('/*.html', (req, res, next) => {
  const filename = path.basename(req.path);
  if (fs.existsSync(path.join(__dirname, 'pages', filename))) {
    res.redirect(`/pages/${filename}`);
  } else {
    next();
  }
});

// Make sure routes come AFTER serving static files
// API Routes
app.post('/api/subscribe', async (req, res) => {
  const { email, first_name } = req.body;
  
  if (!email) {
    return res.status(400).json({ success: false, error: 'Email is required' });
  }
  
  // Log the subscription
  console.log(`New subscription: ${email}`);
  
  // Get ConvertKit API key from environment variables
  const KIT_API_KEY = process.env.KIT_API_KEY;
  
  if (!KIT_API_KEY) {
    console.error('ConvertKit API key not found in environment variables');
    return res.json({ 
      success: false, 
      message: 'API key not configured',
      environment: process.env.NODE_ENV || 'development'
    });
  }
  
  try {
    // Use the actual form ID provided by the user
    const FORM_ID = '7372973';
    
    // Call ConvertKit API to add subscriber
    const response = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: KIT_API_KEY,
        email: email,
        first_name: first_name || ''
      })
    });
    
    const data = await response.json();
    console.log('ConvertKit API response:', data);
    
    if (response.ok) {
      return res.json({ 
        success: true, 
        message: 'Subscription successful',
        environment: process.env.NODE_ENV || 'development'
      });
    } else {
      console.error('ConvertKit API error:', data);
      return res.json({ 
        success: false, 
        message: data.message || 'Error subscribing to newsletter',
        environment: process.env.NODE_ENV || 'development'
      });
    }
  } catch (error) {
    console.error('ConvertKit subscription error:', error);
    
    // For development, return success to test the flow
    if (process.env.NODE_ENV === 'development') {
      return res.json({ 
        success: true, 
        message: 'Development mode - simulated subscription successful',
        environment: 'development'
      });
    }
    
    return res.json({
      success: false,
      message: 'Error connecting to subscription service',
      environment: process.env.NODE_ENV || 'development'
    });
  }
});

// Stripe webhook handler (placeholder)
app.post('/api/stripe-webhook', express.raw({ type: 'application/json' }), (req, res) => {
  // This would contain actual Stripe integration code
  console.log('Received Stripe webhook');
  res.json({ received: true });
});

// Protect server files
app.use(['/.env', '/package.json', '/package-lock.json', '/node_modules'], (req, res) => {
  res.status(404).end();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`Server listening on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the website`);
}); 