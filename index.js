/**
 * Main Application Entry Point
 * Works in both local development and Replit environments
 */

// Load environment variables
require('dotenv').config();

// Express app setup
const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));

// Make sure routes come AFTER serving static files
// API Routes
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  
  // Log the subscription (replace with actual email service integration)
  console.log(`New subscription: ${email}`);
  
  // For development, just return success
  return res.json({ 
    success: true, 
    message: 'Subscription successful',
    environment: process.env.NODE_ENV || 'development'
  });
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