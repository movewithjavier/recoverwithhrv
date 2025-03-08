/**
 * ConvertKit Integration for RecoverwithHRV
 * Using direct form submission with success handling
 */

document.addEventListener('DOMContentLoaded', function() {
  // Set the redirect URL if we're in local testing
  const form = document.querySelector('.email-signup__form');
  if (form) {
    const redirectInput = form.querySelector('input[name="redirect_url"]');
    if (redirectInput) {
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      
      // Only modify the redirect URL if we're on localhost, otherwise keep the configured URL
      if (isLocalhost) {
        // Use local thank-you.html
        redirectInput.value = window.location.origin + '/thank-you.html';
        console.log('ConvertKit redirect URL set to:', redirectInput.value);
      } else {
        // Make sure the redirect URL matches the current domain (GitHub Pages or custom domain)
        const currentHostUrl = window.location.origin + '/';
        const currentPath = window.location.pathname.split('/').filter(Boolean);
        
        // If we're on GitHub Pages with a project name in the path
        if (currentPath.length > 0 && window.location.hostname.includes('github.io')) {
          redirectInput.value = window.location.origin + '/' + currentPath[0] + '/thank-you.html';
          console.log('ConvertKit redirect URL set for GitHub Pages:', redirectInput.value);
        }
      }
    }
  }

  // Check if there's a success parameter in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get('status');
  const formId = urlParams.get('form_id');
  
  // If we've been redirected back after a successful submission
  if (status === 'success' && formId === '7372973') {
    // Find the form container
    const formSection = document.getElementById('email-signup');
    const form = formSection.querySelector('.email-signup__form');
    
    if (form) {
      // Replace the form with a success message
      form.innerHTML = `
        <div class="form__success">
          <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--accent-color); margin-bottom: 1rem;"></i>
          <h3 style="color: white;">Thank You!</h3>
          <p style="color: white;">Check your inbox for your first lesson.</p>
        </div>
      `;
      
      // Smooth scroll to the success message
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Clean the URL by removing the query parameters
    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }
}); 