# RecoverwithHRV.com Deployment Instructions

## Development Environment Setup

1. **Local Development**:
   - Maintain your development environment in the `/Users/saverio/Sites/recoverwithhrv` directory
   - Use Node.js Express server for local development
   - Run `npm install` to install dependencies
   - Start server with `node index.js`
   - Test at http://localhost:3000

2. **File Structure**:
   - Keep `index.html` in the root directory
   - Place all other HTML pages in the `pages/` directory
   - Maintain CSS in the `css/` directory
   - Maintain JavaScript in the `js/` directory
   - Keep assets in the `assets/` directory
   - Keep server files (`index.js`, `package.json`) in the root directory

## GitHub Synchronization

1. **Files to Include**:
   - HTML files: `index.html`, `book.html`, etc.
   - Asset directories: `css/`, `js/`, `assets/`
   - Server files: `index.js`, `package.json`
   - Documentation: `README.md`
   - Configuration: `.gitignore`, `.env.example`

2. **Files to Exclude** (via `.gitignore`):
   - Development tools: `tools/`, `venv/`, `scripts/`, `config/`
   - AI assistance: `.cursorrules`, `.cursorignore`, `README_devin.cursorrules.md`
   - Environment files: `.env` (except `.env.example`)
   - Build artifacts: `node_modules/`, `dist/`, `build/`
   - System files: `.DS_Store`, IDE configs
   - Development files: `screenshots/`

3. **Commit Process**:
   - Test all changes locally with Node.js server
   - Commit only essential files (the `.gitignore` will help exclude non-essential files)
   - Use descriptive commit messages
   - Push changes to GitHub

## Replit Deployment Setup

1. **GitHub Integration**:
   - Sign in to [Replit.com](https://replit.com/)
   - Create a new Node.js project
   - Connect to your GitHub repository
   - Enable automatic synchronization with GitHub

2. **Environment Variables**:
   - In Replit, go to "Secrets" tab
   - Add required API keys and configuration based on `.env.example`:
     - `KIT_API_KEY`: Your ConvertKit API key
     - Other secrets as needed

3. **Zero-Edit Deployment**:
   - The goal is for GitHub files to work directly on Replit without edits
   - Any environment-specific configurations should use `.env` variables
   - Server code should detect deployment environment and adapt as needed

## Custom Domain Setup

1. **Domain Configuration**:
   - In Replit, go to project settings
   - Click on "Custom Domain"
   - Enter your domain: `recoverwithhrv.com`
   - Follow the DNS configuration instructions provided by Replit

2. **DNS Configuration**:
   - Add the CNAME records as specified by Replit
   - Wait for DNS propagation (can take 24-48 hours)

## API Integration

1. **ConvertKit Integration**:
   - Ensure the `/api/subscribe` endpoint is properly configured
   - Test form submission to verify API calls work correctly
   - Check ConvertKit dashboard for successful signups

2. **Other API Integrations**:
   - Add additional API endpoints to `index.js` as needed
   - Secure all API keys in Replit Secrets and local `.env`
   - Implement proper error handling for all API calls

## Pre-Deployment Checklist

1. **Technical Checks**:
   - Verify Express server starts correctly
   - Test all API endpoints with browser or Postman
   - Validate HTML with W3C Validator
   - Test forms and ensure submissions work
   - Check for broken links
   - Verify all images have alt text
   - Check meta tags and SEO elements
   - Ensure proper favicon is in place

2. **Performance Checks**:
   - Run Google PageSpeed Insights test
   - Optimize any images over 200KB
   - Minify CSS and JavaScript files
   - Verify mobile responsiveness

3. **Content Checks**:
   - Proofread all content
   - Ensure all CTAs are working
   - Verify contact information is correct
   - Check privacy policy and terms pages

## Monitoring & Maintenance

1. **Regular Checks**:
   - Weekly: Check Replit logs for errors
   - Monthly: Check site analytics for conversion performance
   - Monthly: Test all forms and links
   - Quarterly: Update content as needed
   - Quarterly: Run performance audits

2. **Troubleshooting Common Issues**:
   - If server crashes: Check Replit logs and fix server code
   - If forms not working: Verify API endpoints and environment variables
   - If images not loading: Check paths and image optimization
   - If custom domain not working: Verify DNS settings

3. **Backup Process**:
   - GitHub repository serves as version control
   - Download local copy of repository quarterly
   - Keep separate backup of any large media files not in the repository
   - Back up your Replit environment variables