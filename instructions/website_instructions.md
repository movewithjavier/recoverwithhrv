# RecoverwithHRV.com Website Instructions

## Site Overview

RecoverwithHRV.com is a resource focused on helping people understand and utilize Heart Rate Variability (HRV) for improved health and recovery. The site follows a landing page-centric architecture where each page is self-contained with its own clear call-to-action.

## Core Principles

- **Landing Page Focus**: No traditional navigation menu. Each page is complete and standalone.
- **Action-Oriented**: Every page has a single, clear call-to-action.
- **User-Centric Copy**: Content focuses on benefits to the user, not features.
- **Conversion-Optimized**: Design choices prioritize conversions over exploration.

## Page Structure

### Common Elements

Each page should include:

- **Header**: Logo (linked to homepage) + single CTA button (unique to each page)
- **Hero Section**: Compelling headline, subheadline, and relevant imagery
- **Social Proof**: Testimonials, reviews, or trust indicators
- **Footer**: Minimal with essential links (Privacy Policy, Terms, Contact)

### Page Templates

#### Home Page (index.html)
- **Primary Purpose**: Email course signup
- **Key Sections**:
  - Introduction to HRV concept
  - Benefits of learning about HRV
  - Preview of email course content
  - Signup form (prominently displayed)
  - FAQ about the email course
- **CTA**: "Get the Free 7-Day HRV Email Course"

#### Book Page (book.html)
- **Primary Purpose**: Book sales
- **Key Sections**:
  - Book overview and benefits
  - Author credentials
  - Chapter preview/table of contents
  - Reader testimonials
  - Purchase options
  - Money-back guarantee (if applicable)
- **CTA**: "Buy the Book Now"

## Content Strategy

### Voice & Tone
- **Professional yet accessible**
- **Educational but not overly technical**
- **Encouraging and solution-focused**

### Copy Guidelines
- Use second-person ("you") to directly address the reader
- Focus on benefits rather than features
- Use clear, concise language
- Break up text with subheadings, bullet points, and short paragraphs
- Include specific, measurable outcomes where possible

### Conversion Elements
- **CTAs**: High-contrast buttons with action verbs
- **Forms**: Minimal fields to reduce friction
- **Social Proof**: Strategically place testimonials near decision points
- **Objection Handling**: Address common concerns before they become roadblocks

## Visual Design

### Brand Elements
- **Color Palette**: 
  - Primary: Health-focused blue/green tones
  - Secondary: Contrasting colors for CTAs and important elements
- **Typography**: Clean, readable fonts suitable for health/wellness content
- **Imagery**: 
  - Recovery-focused visuals
  - Data visualization of HRV concepts
  - Active lifestyle imagery

### Page Structure
- Single-column layout for improved readability and flow
- Strategic white space to emphasize important elements
- Mobile-first design approach

## Future Expansion

Potential additional pages to develop:

- **HRV Basics**: Educational content about HRV fundamentals
- **Case Studies**: Success stories using HRV for recovery
- **Resources**: Tools, apps, and devices for measuring HRV
- **About/Founder**: Background story and credentials
- **Blog**: Regular content updates on HRV research and applications

## Testing & Optimization

- Implement basic analytics to track page performance
- Monitor conversion rates for each CTA
- Consider A/B testing different headlines or CTA copy
- Collect user feedback for continuous improvement

## Development Process

- All development work is done in the `/Users/saverio/Sites/recoverwithhrv` directory using Cursor AI
- Use Node.js Express server (`index.js`) for local testing
- Test at http://localhost:3000
- File structure:
  - Main landing page (`index.html`) in the root directory
  - All other pages (`book.html`, `thank-you.html`, etc.) in the `pages/` directory
  - Asset directories: `css/`, `js/`, `assets/`
- Only essential website files are pushed to GitHub:
  - Landing page: `index.html`
  - Pages directory: `pages/`
  - Asset directories: `css/`, `js/`, `assets/`
  - Server files: `index.js`, `package.json`
  - Documentation: `README.md`
  - Configuration: `.gitignore`, `.env.example`
- The GitHub repository syncs with Replit for deployment
- Use environment variables (`.env`) for environment-specific configurations
- The goal is zero-edit deployment from GitHub to Replit

## Technical Notes

- Ensure fast page load times by optimizing images and code
- Implement SEO best practices for improved visibility
- Make email signup and purchase processes as frictionless as possible
- Ensure mobile responsiveness for all pages
- Use the `.gitignore` file to exclude development tools and AI assistance files from GitHub
- Keep essential file paths consistent between development and deployment environments
- Test all functionality locally before pushing to GitHub