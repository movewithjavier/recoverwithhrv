/**
 * RecoverwithHRV.com Main JavaScript
 */

// Global error handling
window.addEventListener('error', function(event) {
  console.error('Global error caught:', event.error);
  console.error('Error message:', event.message);
  console.error('Error source:', event.filename, 'line:', event.lineno, 'column:', event.colno);
  // Don't prevent the default action
  return false;
});

// Initialize components and functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('Main.js: Document ready');
  
  // Check for important page elements
  const emailForm = document.getElementById('email-signup-form');
  if (emailForm) {
    console.log('Main.js: Found email signup form');
  }
  
  // Header scroll effect - direct implementation
  const header = document.querySelector('.header');
  if (header) {
    console.log('Header found in main.js');
    
    function handleHeaderScroll() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
        console.log('Added scrolled class from main.js');
      } else {
        header.classList.remove('scrolled');
        console.log('Removed scrolled class from main.js');
      }
    }
    
    // Initial check
    handleHeaderScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleHeaderScroll);
  } else {
    console.error('Header not found in main.js');
  }
  
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    // Export any functions here
  };
} 