/**
 * Form Validation Component
 * Handles form validation for all forms on the site
 * Excludes email-signup-form which has its own handler
 */

// Initialize form validation when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Form validation script loaded');
  initFormValidation();
});

function initFormValidation() {
  const forms = document.querySelectorAll('.form');
  
  forms.forEach(form => {
    // Skip the email signup form - it has its own handler
    if (form.id === 'email-signup-form') {
      console.log('Skipping email-signup-form in form-validation.js');
      return;
    }
    
    console.log('Attaching validation to form:', form.id || 'unnamed form');
    
    form.addEventListener('submit', function(e) {
      let isValid = true;
      
      // Get all required inputs
      const requiredInputs = form.querySelectorAll('[required]');
      
      // Check each required input
      requiredInputs.forEach(input => {
        // Remove existing error messages
        const existingError = input.parentNode.querySelector('.form__error');
        if (existingError) {
          existingError.remove();
        }
        
        // Remove error class
        input.classList.remove('form__input--error');
        
        // Check if input is empty
        if (!input.value.trim()) {
          isValid = false;
          
          // Add error class
          input.classList.add('form__input--error');
          
          // Create error message
          const errorMessage = document.createElement('span');
          errorMessage.className = 'form__error';
          errorMessage.textContent = 'This field is required';
          
          // Insert error message after input
          input.parentNode.insertBefore(errorMessage, input.nextSibling);
        }
        
        // Check email format if it's an email input
        if (input.type === 'email' && input.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value.trim())) {
            isValid = false;
            
            // Add error class
            input.classList.add('form__input--error');
            
            // Create error message
            const errorMessage = document.createElement('span');
            errorMessage.className = 'form__error';
            errorMessage.textContent = 'Please enter a valid email address';
            
            // Insert error message after input
            input.parentNode.insertBefore(errorMessage, input.nextSibling);
          }
        }
      });
      
      // If form is not valid, prevent submission
      if (!isValid) {
        e.preventDefault();
      } else {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form__success';
        successMessage.textContent = 'Form submitted successfully!';
        
        // Clear form
        form.reset();
        
        // Add success message
        form.appendChild(successMessage);
        
        // Remove success message after 3 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 3000);
        
        // Prevent default form submission for this example
        // In a real application, you might want to submit the form via AJAX
        e.preventDefault();
      }
    });
  });
}

// Make the function available globally
window.initFormValidation = initFormValidation; 