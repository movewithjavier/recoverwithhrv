# RecoverwithHRV.com Technical Specifications

## Technology Stack
- HTML5
- CSS3 (with Flexbox/Grid for layouts)
- Vanilla JavaScript
- Express.js (for server-side processing)
- Node.js (to run the server)

## File Structure 

> **Note**: The file structure has been updated for better organization.

/
├── index.js # Express server for API endpoints
├── package.json # Node.js dependencies
├── index.html # Main landing page (Free email course)
├── pages/ # All non-index HTML pages
│ ├── book.html # Book sales page
│ ├── thank-you.html # Thank you page after form submission
│ └── [additional pages will go here]
├── css/
│ ├── styles.css # Main stylesheet with color variables and utility classes
│ ├── normalize.css # CSS reset/normalize
│ ├── book.css # Book page specific styles
│ └── components/ # Component-specific styles
│   ├── header.css # Header styles with gradient effects
│   ├── hero.css # Hero section styles
│   ├── footer.css # Footer styles
│   ├── buttons.css # CTA button styles with variants
│   ├── forms.css # Form styles for email signup
│   ├── testimonials.css # Testimonial component styles
│   ├── benefits.css # Benefits section styles
│   ├── course-preview.css # Course preview section styles
│   ├── faq.css # FAQ section styles
│   └── intro.css # Introduction section styles
├── js/
│ ├── main.js # Main JavaScript file
│ ├── placeholder-images.js # Dynamic placeholder image generation (development only)
│ ├── test-header.js # Header testing script (development only)
│ ├── form-handler.js # Form submission handling with server API
│ ├── local-testing.js # Local development testing helpers
│ ├── convertkit-integration.js # ConvertKit integration (legacy)
│ └── components/ # Component-specific scripts
│   ├── header-animation.js # Header scroll animation
│   ├── form-validation.js # Email signup validation
│   ├── testimonial-slider.js # Testimonial carousel
│   └── analytics.js # Conversion tracking
├── assets/
│ ├── images/ # Image files
│ │ ├── logos/ # Logo files
│ │ │ ├── logo.svg # RecoverwithHRV logo
│ │ │ ├── logo-white.svg # White version for dark backgrounds
│ │ │ └── favicon.png # Favicon
│ │ ├── hero/ # Hero section images
│ │ │ ├── hero-home.jpg # Home page hero image
│ │ │ └── hero-book.jpg # Book page hero image
│ │ ├── testimonials/ # Testimonial author images
│ │ │ ├── testimonial-1.jpg # Testimonial author image
│ │ │ ├── testimonial-2.jpg # Testimonial author image
│ │ │ └── testimonial-3.jpg # Testimonial author image
│ │ ├── graphics/ # Graphs and data visualizations
│ │ │ └── hrv-graph.jpg # HRV graph visualization
│ │ ├── icons/ # Icon files for various UI elements
│ │ └── misc/ # Miscellaneous images
│ │   ├── book-cover.jpg # Book cover image
│ │   └── author.jpg # Author photo
│ ├── fonts/ # Web fonts
│ └── videos/ # Video files (if any)
├── tools/ # Utility tools
│ ├── screenshot_utils.py # Screenshot capture utility
│ ├── llm_api.py # LLM API integration
│ ├── web_scraper.py # Web scraping utility
│ └── search_engine.py # Search engine utility
├── venv/ # Python virtual environment
├── screenshots/ # Screenshots for documentation and testing
├── .github/
│ └── workflows/
│   └── deploy.yml # GitHub Actions workflow
├── requirements/ # Project documentation
│ ├── website_instructions.md # High-level website strategy
│ ├── technical_specifications.md # This file (technical structure)
│ ├── design_guidelines.md # Design guidelines with color scheme details
│ └── deployment_instructions.md # Deployment instructions
├── design_guidelines.md # Comprehensive design guidelines with color scheme
├── color_scheme_summary.md # Summary of color scheme redesign
├── .cursorrules # Project instructions and task documentation
├── .gitignore # Git ignore file
├── .env # Environment variables for API keys and configuration
├── CNAME # Custom domain for GitHub Pages (recoverwithhrv.com)
└── README.md # Project README

## Development Workflow

1. **Local Development**:
   - Run a local Node.js server with `npm start` or `node index.js`
   - Use Express to handle form submissions and API calls
   - Develop and test server-side functionality locally
   - Focus on building one complete page at a time
   - Optimize for mobile first, then expand to desktop
   - Use screenshot verification for design feedback

2. **Version Control**:
   - Commit changes regularly with descriptive messages
   - Use feature branches for new pages or major revisions
   - Merge to main branch when ready to deploy

3. **Testing**:
   - Test API endpoints using the browser or tools like Postman
   - Test CTA flows and form submissions thoroughly
   - Ensure responsive design works on all screen sizes
   - Test page load speed with tools like Google PageSpeed
   - Verify form validation works correctly
   - Test with different browsers (Chrome, Firefox, Safari, Edge)
   - Use screenshot verification with LLM feedback for design evaluation

4. **Deployment**:
   - Deploy server code to Replit
   - Set up environment variables in Replit
   - Connect Replit to GitHub repository for automatic updates
   - Configure custom domain in Replit

## Best Practices

- Use semantic HTML elements for better accessibility and SEO
- Keep CSS organized with BEM naming convention
- Use CSS variables for consistent color application
- Follow the 60-30-10 rule for color distribution (60% primary, 30% secondary, 10% accent)
- Reserve accent colors exclusively for CTAs and important actions
- Minimize JavaScript dependencies to improve load times
- Optimize all images for web (use WebP format with JPEG fallbacks)
- Implement lazy loading for images below the fold
- Keep forms simple with minimal required fields
- Include proper analytics tracking for conversions
- Ensure all CTA buttons are easily clickable on mobile devices
- Use microcopy near forms to address potential user concerns
- Create clean, focused landing pages with minimal distractions
- Test your CTA positioning for maximum visibility
- Implement proper meta tags for SEO and social sharing
- Ensure sufficient contrast between text and background colors for readability
- Keep server-side code clean and well-documented
- Use environment variables for all API keys and sensitive information
- Implement proper error handling for API requests
- Use relative URLs for page references to maintain flexibility in deployment