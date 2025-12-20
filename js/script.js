/*
   Main JavaScript File
   Contains interactive functionality and DOM manipulation
*/

document.addEventListener('DOMContentLoaded', function() {
  console.log('Website loaded successfully');
  
  // Smooth scrolling for navigation links
  initSmoothScroll();
  
  // Contact form handling
  initContactForm();
});

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Don't apply smooth scroll to form
      if (href === '#' || href.startsWith('http')) {
        return;
      }
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        // Use smooth scroll behavior
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Initialize contact form with validation and submission handling
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (!form) return;
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const statusMessage = document.getElementById('form-status');
  
  // Form validation on submit
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate form
    if (!validateForm(nameInput, emailInput, subjectInput, messageInput)) {
      return;
    }
    
    // Simulate form submission
    submitForm(form, statusMessage);
  });
  
  // Real-time validation
  nameInput.addEventListener('blur', function() {
    validateField(this, 'Name is required');
  });
  
  emailInput.addEventListener('blur', function() {
    validateEmail(this);
  });
  
  subjectInput.addEventListener('blur', function() {
    validateField(this, 'Subject is required');
  });
  
  messageInput.addEventListener('blur', function() {
    validateField(this, 'Message is required');
  });
}

/**
 * Validate entire form
 */
function validateForm(nameInput, emailInput, subjectInput, messageInput) {
  let isValid = true;
  
  if (!validateField(nameInput, 'Name is required')) isValid = false;
  if (!validateEmail(emailInput)) isValid = false;
  if (!validateField(subjectInput, 'Subject is required')) isValid = false;
  if (!validateField(messageInput, 'Message is required')) isValid = false;
  
  return isValid;
}

/**
 * Validate a single text field
 */
function validateField(field, errorMessage) {
  const value = field.value.trim();
  
  if (!value) {
    field.style.borderColor = '#dc2626';
    return false;
  } else {
    field.style.borderColor = 'var(--color-border)';
    return true;
  }
}

/**
 * Validate email field
 */
function validateEmail(field) {
  const email = field.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    field.style.borderColor = '#dc2626';
    return false;
  } else if (!emailRegex.test(email)) {
    field.style.borderColor = '#dc2626';
    return false;
  } else {
    field.style.borderColor = 'var(--color-border)';
    return true;
  }
}

/**
 * Simulate form submission
 * In a real application, this would send data to a server
 */
function submitForm(form, statusMessage) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  // Disable button and show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  
  // Simulate network delay
  setTimeout(function() {
    // Show success message
    statusMessage.textContent = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!';
    statusMessage.classList.add('show', 'success');
    
    // Reset form
    form.reset();
    
    // Reset button
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
    
    // Hide message after 5 seconds
    setTimeout(function() {
      statusMessage.classList.remove('show', 'success');
    }, 5000);
  }, 1500);
}
