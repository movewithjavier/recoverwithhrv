/**
 * Test script for header scroll effect
 */

// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Test script loaded');
  
  // Get the header element
  const header = document.querySelector('.header');
  
  if (!header) {
    console.error('Header element not found in test script');
    return;
  }
  
  console.log('Header element found:', header);
  
  // Log the current scroll position
  console.log('Current scroll position:', window.scrollY);
  
  // Log whether the header has the scrolled class
  console.log('Header has scrolled class:', header.classList.contains('scrolled'));
  
  // Test adding and removing the scrolled class
  header.classList.add('scrolled');
  console.log('Added scrolled class manually');
  console.log('Header has scrolled class now:', header.classList.contains('scrolled'));
  
  // Check if the header style changes
  console.log('Header height after adding scrolled class:', getComputedStyle(header).height);
  
  // Remove the class after 2 seconds
  setTimeout(function() {
    header.classList.remove('scrolled');
    console.log('Removed scrolled class manually');
    console.log('Header has scrolled class now:', header.classList.contains('scrolled'));
    console.log('Header height after removing scrolled class:', getComputedStyle(header).height);
  }, 2000);
  
  // Add a scroll event listener for testing
  window.addEventListener('scroll', function() {
    console.log('Scroll event detected, position:', window.scrollY);
  });
}); 