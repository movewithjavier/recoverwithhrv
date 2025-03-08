/**
 * Local Testing Helper for ConvertKit Integration
 * Only active in development environments (localhost)
 */

document.addEventListener('DOMContentLoaded', function() {
  // Check if we're in local development mode
  const isLocalDevelopment = window.location.hostname === 'localhost' || 
                            window.location.hostname === '127.0.0.1';
  
  if (isLocalDevelopment) {
    console.log('📝 Local development mode active: Form submissions will be intercepted');
    
    // Get the form
    const form = document.querySelector('.email-signup__form');
    if (form) {
      // Add local testing interceptor for development mode
      form.addEventListener('submit', function(event) {
        // Prevent the actual form submission
        event.preventDefault();
        console.log('🔍 Local development mode: Intercepting form submission');
        
        // Log form data that would be sent
        const formData = new FormData(form);
        console.log('📤 Form data that would be sent to ConvertKit:');
        for (let [key, value] of formData.entries()) {
          console.log(`  ${key}: ${value}`);
        }
        
        // Get redirect URL or use default
        const redirectInput = form.querySelector('input[name="redirect_url"]');
        let redirectUrl = '/thank-you.html';
        
        if (redirectInput && redirectInput.value) {
          redirectUrl = redirectInput.value;
        }
        
        // Simulate successful submission after a short delay
        console.log('⏱️ Simulating API call delay...');
        setTimeout(() => {
          console.log('✅ Simulating successful submission redirect to:', redirectUrl);
          window.location.href = redirectUrl;
        }, 1500);
      });
      
      // Add a visible indicator that we're in test mode
      const formContainer = form.closest('.email-signup');
      if (formContainer) {
        const testBadge = document.createElement('div');
        testBadge.style.position = 'absolute';
        testBadge.style.top = '10px';
        testBadge.style.right = '10px';
        testBadge.style.background = 'rgba(255, 193, 7, 0.8)';
        testBadge.style.color = '#000';
        testBadge.style.padding = '5px 10px';
        testBadge.style.borderRadius = '4px';
        testBadge.style.fontSize = '12px';
        testBadge.style.fontWeight = 'bold';
        testBadge.style.zIndex = '1000';
        testBadge.textContent = '🧪 TEST MODE';
        
        formContainer.style.position = 'relative';
        formContainer.appendChild(testBadge);
      }
    }
  }
}); 