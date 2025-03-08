/**
 * Analytics Component
 * Handles basic analytics tracking for the site
 */

// Initialize analytics when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initAnalytics();
});

function initAnalytics() {
  // Track page views
  trackPageView();
  
  // Track CTA button clicks
  trackCTAClicks();
  
  // Track form submissions
  trackFormSubmissions();
}

function trackPageView() {
  // In a real implementation, this would send data to your analytics service
  console.log('Analytics: Page view tracked', {
    page: window.location.pathname,
    referrer: document.referrer,
    timestamp: new Date().toISOString()
  });
}

function trackCTAClicks() {
  // Track clicks on CTA buttons
  const ctaButtons = document.querySelectorAll('.btn--accent, .hero__cta, .header__cta');
  
  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Get button text and href
      const buttonText = this.textContent.trim();
      const buttonHref = this.getAttribute('href');
      
      // In a real implementation, this would send data to your analytics service
      console.log('Analytics: CTA click tracked', {
        buttonText,
        buttonHref,
        page: window.location.pathname,
        timestamp: new Date().toISOString()
      });
    });
  });
}

function trackFormSubmissions() {
  // Track form submissions
  const forms = document.querySelectorAll('.form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      // Get form ID or action
      const formId = this.id || 'unknown';
      const formAction = this.getAttribute('action') || 'unknown';
      
      // In a real implementation, this would send data to your analytics service
      console.log('Analytics: Form submission tracked', {
        formId,
        formAction,
        page: window.location.pathname,
        timestamp: new Date().toISOString()
      });
    });
  });
} 