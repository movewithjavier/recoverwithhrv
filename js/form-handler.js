document.addEventListener('DOMContentLoaded', function() {
  // Form submission handler
  const form = document.getElementById('email-signup-form');
  const submissionMessage = document.getElementById('submission-message');
  
  // Debug DOM elements
  console.log('Form element found:', form);
  console.log('Name input element:', document.getElementById('name'));
  console.log('Email input element:', document.getElementById('email'));
  
  if (form) {
    console.log('Form handler initialized for form:', form.id);
    
    form.addEventListener('submit', async function(event) {
      event.preventDefault();
      
      // Get form data - check all possible ways to access
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      
      // Direct access
      console.log('Direct DOM elements:', {
        nameInput,
        emailInput,
        nameValue: nameInput ? nameInput.value : 'not found',
        emailValue: emailInput ? emailInput.value : 'not found'
      });
      
      // Form elements collection
      console.log('Form elements:', {
        nameFromForm: form.elements['name'] ? form.elements['name'].value : 'not found',
        emailFromForm: form.elements['email'] ? form.elements['email'].value : 'not found'
      });
      
      // FormData API
      const formData = new FormData(form);
      console.log('FormData entries:');
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
      
      const firstName = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      
      console.log('Form submission attempt:', { firstName, email });
      
      if (!email) {
        showMessage('Please enter your email address', 'error');
        return;
      }
      
      // Track the submission event (analytics)
      if (window.trackEvent) {
        window.trackEvent('form_submit', { 
          form_id: '7372973',
          form_type: 'email_signup'
        });
      }
      
      // Disable the submit button and show loading state
      const submitButton = document.getElementById('submit-button');
      const originalButtonText = submitButton.innerHTML;
      submitButton.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
      submitButton.disabled = true;
      
      try {
        console.log('Sending data to API endpoint: /api/subscribe');
        const apiUrl = '/api/subscribe';
        console.log('API URL:', apiUrl);
        console.log('Request payload:', { first_name: firstName, email });
        
        // Send data to our server-side endpoint
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ first_name: firstName, email })
        });
        
        console.log('API Response status:', response.status);
        
        const data = await response.json();
        console.log('API Response data:', data);
        
        if (data.success) {
          // Track successful submission (analytics)
          if (window.trackEvent) {
            window.trackEvent('form_success', { 
              form_id: '7372973',
              form_type: 'email_signup'
            });
          }
          
          // Show success message and hide the form
          form.style.display = 'none';
          showMessage(`
            <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--accent-color); margin-bottom: 1rem;"></i>
            <h3>Thank You!</h3>
            <p>Check your inbox for your first lesson.</p>
            <p style="margin-top: 1rem;"><small>You'll be redirected to our thank you page in a few seconds...</small></p>
          `, 'success');
          
          // Redirect to thank you page after a delay
          setTimeout(() => {
            window.location.href = '/thank-you.html';
          }, 3000);
        } else {
          // Track submission failure (analytics)
          if (window.trackEvent) {
            window.trackEvent('form_error', { 
              form_id: '7372973',
              form_type: 'email_signup',
              error: data.message || 'Unknown error'
            });
          }
          
          // Show error message
          showMessage(`
            <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: #e74c3c; margin-bottom: 1rem;"></i>
            <h3>Oops!</h3>
            <p>There was a problem: ${data.message || 'Please try again.'}</p>
            <p><small>Technical details: ${JSON.stringify(data)}</small></p>
          `, 'error');
          
          // Reset button state
          submitButton.innerHTML = originalButtonText;
          submitButton.disabled = false;
        }
      } catch (error) {
        console.error('Fetch Error:', error);
        
        // Track submission error (analytics)
        if (window.trackEvent) {
          window.trackEvent('form_error', { 
            form_id: '7372973',
            form_type: 'email_signup',
            error: error.message || 'Network error'
          });
        }
        
        // Show error message
        showMessage(`
          <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: #e74c3c; margin-bottom: 1rem;"></i>
          <h3>Oops!</h3>
          <p>Network error: ${error.message || 'Failed to connect to server'}</p>
          <p><small>Please check your internet connection and try again.</small></p>
        `, 'error');
        
        // Reset button state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
      }
    });
  } else {
    console.warn('Form with ID "email-signup-form" not found on this page');
  }
  
  // Function to show status messages
  function showMessage(message, type) {
    if (submissionMessage) {
      submissionMessage.innerHTML = message;
      submissionMessage.style.display = 'block';
      
      if (type === 'error') {
        submissionMessage.style.borderTop = '3px solid #e74c3c';
      } else {
        submissionMessage.style.borderTop = '3px solid var(--accent-color)';
      }
    }
  }
}); 