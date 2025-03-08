#!/usr/bin/env node
/**
 * Replit Deployment Script
 * 
 * This script helps deploy your application to Replit by:
 * 1. Copying only the necessary files
 * 2. Applying environment-specific transformations
 * 3. Configuring Replit-specific settings
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  // Source directory (where your clean code lives)
  sourceDir: path.resolve(__dirname, '..'),
  
  // Replit directory (either local clone or via GitHub integration)
  replitDir: process.env.REPLIT_DIR || path.resolve(__dirname, '../../replit-deploy'),
  
  // Files/directories to include
  include: [
    'src/**/*',
    'config/**/*',
    'package.json',
    'package-lock.json',
    'README.md',
    '.env.example',
    'index.js',
    'public/**/*',
    'assets/**/*'
  ],
  
  // Files/directories to exclude (even if they match include patterns)
  exclude: [
    'cursor/**/*',
    '.cursor/**/*',
    '.git/**/*',
    'node_modules/**/*',
    'deployment/**/*',
    '.env',
    '**/.DS_Store'
  ]
};

// Create Replit configuration file
function createReplitConfig() {
  const replitConfig = {
    run: 'npm start',
    language: 'nodejs',
    entrypoint: 'index.js',
    onBoot: 'npm install'
  };
  
  fs.writeFileSync(
    path.join(config.replitDir, '.replit'),
    Object.entries(replitConfig)
      .map(([key, value]) => `${key} = "${value}"`)
      .join('\n')
  );
  
  console.log('✅ Created .replit configuration file');
}

// Copy files based on include/exclude patterns
function copyFiles() {
  // Helper function to check if a file should be included
  function shouldInclude(filePath) {
    const relativePath = path.relative(config.sourceDir, filePath);
    
    // Check if file matches any include pattern
    const isIncluded = config.include.some(pattern => {
      const regexPattern = new RegExp(`^${pattern.replace(/\*/g, '.*')}$`);
      return regexPattern.test(relativePath);
    });
    
    // Check if file matches any exclude pattern
    const isExcluded = config.exclude.some(pattern => {
      const regexPattern = new RegExp(`^${pattern.replace(/\*/g, '.*')}$`);
      return regexPattern.test(relativePath);
    });
    
    return isIncluded && !isExcluded;
  }
  
  // Helper function to recursively copy directories
  function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    entries.forEach(entry => {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else if (shouldInclude(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${path.relative(config.sourceDir, srcPath)}`);
      }
    });
  }
  
  // Start copying
  copyDir(config.sourceDir, config.replitDir);
  console.log('✅ Copied all necessary files');
}

// Apply any Replit-specific transformations
function applyTransformations() {
  // Create a production .env file if not exists
  if (!fs.existsSync(path.join(config.replitDir, '.env'))) {
    console.log('Creating production .env file from .env.example');
    fs.copyFileSync(
      path.join(config.replitDir, '.env.example'),
      path.join(config.replitDir, '.env')
    );
    
    // Set production environment
    let envContent = fs.readFileSync(path.join(config.replitDir, '.env'), 'utf8');
    envContent = envContent.replace(/NODE_ENV=development/, 'NODE_ENV=production');
    fs.writeFileSync(path.join(config.replitDir, '.env'), envContent);
  }
  
  console.log('✅ Applied Replit-specific transformations');
}

// Main function
async function deploy() {
  console.log('🚀 Starting deployment to Replit...');
  
  try {
    // Ensure Replit directory exists
    if (!fs.existsSync(config.replitDir)) {
      fs.mkdirSync(config.replitDir, { recursive: true });
      console.log(`Created deployment directory: ${config.replitDir}`);
    }
    
    // Copy files
    copyFiles();
    
    // Create Replit config
    createReplitConfig();
    
    // Apply transformations
    applyTransformations();
    
    console.log('✅ Deployment to Replit prepared successfully!');
    console.log('');
    console.log('Next steps:');
    console.log('1. Push changes to GitHub (if using GitHub integration with Replit)');
    console.log('2. Or manually upload modified files to your Replit project');
    console.log('3. Check your Replit .env file to ensure all production values are set');
    console.log('4. Start your Replit application and verify it works');
    
  } catch (error) {
    console.error('❌ Deployment failed:', error);
    process.exit(1);
  }
}

// Run the deployment
deploy(); 