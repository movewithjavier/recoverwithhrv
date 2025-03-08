# RecoverwithHRV Design Guidelines

## Color Scheme

Our color scheme is designed based on color theory principles to maximize conversion and create a visually appealing, trustworthy brand. We use a triadic color scheme with carefully selected tints and shades to create visual hierarchy and guide users toward conversion actions.

### Primary Color (60% - Background & Base)
- **Teal** - Represents trustworthiness, professionalism, and health
- Primary: `#0D8A8C` - Used for headers, important text, and UI elements
- Light: `#5CBFC0` - Used for hover states and secondary elements
- Dark: `#076466` - Used for active states and emphasis

### Secondary Color (30% - Supporting Elements)
- **Purple** - Represents wisdom, quality, and luxury
- Secondary: `#5B4E96` - Used for secondary UI elements and accents
- Light: `#8A7EBB` - Used for hover states and backgrounds
- Dark: `#3A3169` - Used for active states and emphasis

### Accent Color (10% - CTAs & Important Elements)
- **Muted Orange** - Represents energy, enthusiasm, and action
- Accent: `#F06E3B` - Used for CTA buttons and important highlights
- Light: `#F59D7A` - Used for hover states and secondary accents
- Dark: `#D04E1B` - Used for active states and emphasis

### Neutral Colors
- White: `#FFFFFF` - Primary background color
- Light Gray: `#F5F7FA` - Secondary background color for alternating sections
- Border: `#E5E8ED` - Subtle borders and dividers
- Text: `#2D3748` - Primary text color
- Secondary Text: `#718096` - Secondary text color for less important information

## Color Implementation Guidelines

### 60-30-10 Rule
- 60% - Primary color (teal) for main UI elements, headers, and primary backgrounds
- 30% - Secondary color (purple) for supporting elements, icons, and secondary backgrounds
- 10% - Accent color (muted orange) exclusively for CTAs and important highlights

### Gradients
- Use gradients to create visual interest and depth
- Primary gradient: Linear gradient from primary to secondary color
- Accent gradient: Linear gradient from accent to accent-dark color
- Use gradients for section titles, buttons, and decorative elements

### Color Combinations
- Primary + Secondary: Use for headers, logos, and section titles
- Primary + Accent: Use for important UI elements and CTAs
- Secondary + Accent: Use for hover states and interactive elements

### Text Colors
- Use text-color (`#2D3748`) for most body text
- Use text-secondary-color (`#718096`) for less important information
- Use colored text sparingly and only for emphasis

## Typography

### Fonts
- Headings: Montserrat (Bold, Semi-Bold)
- Body: Open Sans (Regular, Light)

### Font Sizes
- H1: 3.5rem (56px)
- H2: 2.25rem (36px)
- H3: 1.5rem (24px)
- H4: 1.25rem (20px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

## Button Styles

### Primary Buttons
- Background: Primary Color (`#0D8A8C`)
- Text: White
- Hover: Dark Primary (`#076466`)
- Used for: Important actions that aren't the main conversion goal

### Accent Buttons
- Background: Accent Color (`#F06E3B`)
- Text: White
- Hover: Dark Accent (`#D04E1B`)
- Used for: Primary CTAs and conversion actions
- Special effects: Subtle shadow, pulse animation on hero CTAs

### Secondary Buttons
- Background: Secondary Color (`#5B4E96`)
- Text: White
- Hover: Dark Secondary (`#3A3169`)
- Used for: Alternative actions or secondary options

### Outline Buttons
- Border: Primary or Accent color
- Text: Primary or Accent color
- Hover: Fills with respective color
- Used for: Tertiary actions or alternative options

## Layout Guidelines

### Visual Hierarchy
1. Use accent color (muted orange) sparingly and only for the most important CTAs
2. Use primary color (teal) for headers, navigation, and supporting UI elements
3. Use secondary color (purple) for supporting elements and visual interest
4. Use white space generously to create focus on important elements

### CTA Placement
- Primary CTAs should be prominently placed above the fold
- Use accent color exclusively for conversion-focused buttons
- Maintain consistent CTA styling throughout the site to train users

## Responsive Design

- Mobile-first approach
- Breakpoints:
  - Small: 576px and below
  - Medium: 768px and below
  - Large: 992px and below
  - Extra Large: 1200px and below

## Accessibility Guidelines

- Maintain a minimum contrast ratio of 4.5:1 for normal text
- Use semantic HTML elements
- Ensure all interactive elements are keyboard accessible
- Provide alternative text for images
- Test with screen readers

## Animation Guidelines

- Use subtle animations to draw attention to important elements
- Keep animations under 300ms for UI interactions
- Use the pulse animation only for primary CTAs
- Ensure animations can be disabled for users with vestibular disorders

## Asset Organization

### Image Directory Structure
Images are organized in a structured directory system to maintain consistency and ease of use:

- `assets/images/logos/` - Logo files (logo.svg, logo-white.svg, favicon.png)
- `assets/images/hero/` - Hero section background images (hero-home.jpg, hero-book.jpg)
- `assets/images/testimonials/` - Testimonial author images (testimonial-1.jpg, etc.)
- `assets/images/graphics/` - Graphs and data visualizations (hrv-graph.jpg, etc.)
- `assets/images/icons/` - Icon files for various UI elements
- `assets/images/misc/` - Miscellaneous images (book-cover.jpg, author.jpg, etc.)

### Naming Conventions
- Use descriptive, lowercase names with hyphens
- Group related images in appropriate directories
- Use consistent naming patterns for related images (e.g., testimonial-1.jpg, testimonial-2.jpg)

## Implementation Notes

- Use CSS variables for consistent color application
- Follow the BEM naming convention for CSS classes
- Maintain component-based architecture for scalability
- Document any deviations from these guidelines 