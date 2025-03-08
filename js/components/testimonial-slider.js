/**
 * Testimonial Slider Component
 * Handles the testimonial slider functionality
 */

// Initialize testimonial slider when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initTestimonialSlider();
});

function initTestimonialSlider() {
  const sliders = document.querySelectorAll('.testimonial-slider');
  
  sliders.forEach(slider => {
    const container = slider.querySelector('.testimonial-slider__container');
    const slides = slider.querySelectorAll('.testimonial-slider__slide');
    const dotsContainer = slider.querySelector('.testimonial-slider__dots');
    
    if (!container || slides.length === 0) return;
    
    // Create dots if they don't exist
    if (dotsContainer && slides.length > 1) {
      dotsContainer.innerHTML = '';
      
      slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = index === 0 ? 'testimonial-slider__dot testimonial-slider__dot--active' : 'testimonial-slider__dot';
        dot.dataset.index = index;
        
        dot.addEventListener('click', () => {
          goToSlide(index);
        });
        
        dotsContainer.appendChild(dot);
      });
    }
    
    // Set initial position
    let currentIndex = 0;
    updateSliderPosition();
    
    // Function to go to a specific slide
    function goToSlide(index) {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }
      
      currentIndex = index;
      updateSliderPosition();
      updateDots();
    }
    
    // Update slider position
    function updateSliderPosition() {
      container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    // Update dots
    function updateDots() {
      if (!dotsContainer) return;
      
      const dots = dotsContainer.querySelectorAll('.testimonial-slider__dot');
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('testimonial-slider__dot--active');
        } else {
          dot.classList.remove('testimonial-slider__dot--active');
        }
      });
    }
    
    // Add touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;
    
    container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
      const swipeThreshold = 50; // Minimum distance to be considered a swipe
      
      if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - go to next slide
        goToSlide(currentIndex + 1);
      } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - go to previous slide
        goToSlide(currentIndex - 1);
      }
    }
    
    // Auto-advance slides every 5 seconds if there's more than one
    if (slides.length > 1) {
      const autoplayInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 5000);
      
      // Pause autoplay on hover
      slider.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
      });
      
      // Resume autoplay on mouse leave
      slider.addEventListener('mouseleave', () => {
        clearInterval(autoplayInterval);
        
        // Create new interval
        setInterval(() => {
          goToSlide(currentIndex + 1);
        }, 5000);
      });
    }
  });
}

// Make the function available globally
window.initTestimonialSlider = initTestimonialSlider; 