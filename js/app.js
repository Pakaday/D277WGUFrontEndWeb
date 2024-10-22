document.addEventListener('DOMContentLoaded', function()  {
  const emailForm = document.getElementById('emailForm');
  const email = document.getElementById('email');
  const confirmEmail = document.getElementById('confirmEmail');

  emailForm.addEventListener('submit', function (event) {
    // Reset custom validity and styles
    confirmEmail.setCustomValidity('');
    email.setCustomValidity('');
    confirmEmail.style.borderColor = '';
    email.style.borderColor = '';

    // Regular expression to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if any field is empty
    if (email.value.length === 0 || confirmEmail.value.length === 0) {
      event.preventDefault();
      alert('Please fill in both email fields');
      if (email.value.length === 0) {
        email.setCustomValidity('Email is required');
        email.style.borderColor = 'red';
      }
      if (confirmEmail.value.length === 0) {
        confirmEmail.setCustomValidity('An email is required');
        confirmEmail.style.borderColor = 'red';
      }
      return;
    }

    // Check if email format is valid
    if (!emailPattern.test(email.value)) {
      event.preventDefault();
      email.setCustomValidity('Invalid email format');
      email.style.borderColor = 'red';
      alert('Please enter a valid email address');
      return;
    }

    // Check if emails match
    if (email.value !== confirmEmail.value) {
      event.preventDefault(); // Prevents form submission
      confirmEmail.setCustomValidity('Email addresses must match');
      confirmEmail.style.borderColor = 'red';

      // Popup alert for non-matching emails
      alert('The email addresses do not match. Please check and try again');
    } else {
      confirmEmail.setCustomValidity('');
      confirmEmail.style.borderColor = 'green';
    }
  });

  // Reset validation when user starts typing
  confirmEmail.addEventListener('input', function () {
    confirmEmail.setCustomValidity('');
    confirmEmail.style.borderColor = ''; // Clear red border when typing
  });

  email.addEventListener('input', function () {
    email.setCustomValidity('');
    email.style.borderColor = ''; // Clear red border when typing
  });
});
