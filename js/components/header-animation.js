/**
 * Header Animation Component
 * Handles the header scroll effect and other header animations
 */

// Initialize header animations when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initHeaderAnimations();
});

function initHeaderAnimations() {
  const header = document.querySelector('.header');
  const logo = document.querySelector('.header__logo');
  
  if (!header) {
    console.error('Header element not found');
    return;
  }
  
  console.log('Header animation initialized');
  
  // Header scroll effect
  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      console.log('Added scrolled class');
    } else {
      header.classList.remove('scrolled');
      console.log('Removed scrolled class');
    }
  }
  
  // Initial check
  handleHeaderScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleHeaderScroll);
  
  // Add hover animation to logo if it exists
  if (logo) {
    logo.addEventListener('mouseenter', function() {
      const logoText = this.querySelector('.header__logo-text');
      if (logoText) {
        logoText.style.transition = 'color 0.3s ease';
        logoText.style.color = 'var(--accent-color)';
      }
    });
    
    logo.addEventListener('mouseleave', function() {
      const logoText = this.querySelector('.header__logo-text');
      if (logoText) {
        logoText.style.transition = 'color 0.3s ease';
        logoText.style.color = 'var(--primary-color)';
      }
    });
  }
} 