/**
 * Main Application Entry Point
 * 
 * This file is the starting point for the application and works in both
 * local development and Replit environments.
 */

// Load environment configuration
const config = require('./config/config');

// Express app setup
const express = require('express');
const path = require('path');
const app = express();

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API routes for email capture
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  
  // Here you would integrate with your email service
  console.log(`New subscription: ${email}`);
  
  // For development, just return success
  if (config.isDevelopment) {
    return res.json({ success: true, message: 'Subscription successful (dev mode)' });
  }
  
  // In production, you would add real email capture logic
  // This is where you'd integrate with your email service
  try {
    // Mock successful email service integration
    return res.json({ success: true, message: 'Subscription successful' });
  } catch (error) {
    console.error('Email subscription error:', error);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
});

// Stripe webhook route
app.post('/api/stripe-webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const signature = req.headers['stripe-signature'];
  
  try {
    // In a real implementation, you would validate the webhook signature
    // and process the Stripe event
    console.log('Received Stripe webhook');
    res.json({ received: true });
  } catch (error) {
    console.error('Stripe webhook error:', error);
    res.status(400).send(`Webhook Error: ${error.message}`);
  }
});

// Start the server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running in ${config.environment} mode`);
  console.log(`Server listening on port ${PORT}`);
  console.log(`Base URL: ${config.baseUrl}`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server gracefully...');
  // Close any database connections or other resources here
  process.exit(0);
}); 