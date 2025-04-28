const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  // Validate First Name
  const firstName = form.elements['firstName'];
  if (!firstName.value.trim()) {
    showError('firstName');
    isValid = false;
  } else {
    hideError('firstName');
  }

  // Validate Last Name
  const lastName = form.elements['lastName'];
  if (!lastName.value.trim()) {
    showError('lastName');
    isValid = false;
  } else {
    hideError('lastName');
  }

  // Validate Email
  const email = form.elements['email'];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
    showError('email');
    isValid = false;
  } else {
    hideError('email');
  }

  // Validate Query Type
  const queryTypeChecked = form.querySelector('input[name="queryType"]:checked');
  if (!queryTypeChecked) {
    showError('queryType');
    isValid = false;
  } else {
    hideError('queryType');
  }

  // Validate Message
  const message = form.elements['message'];
  if (!message.value.trim()) {
    showError('message');
    isValid = false;
  } else {
    hideError('message');
  }

  // Validate Consent
  const consent = form.elements['consent'];
  if (!consent.checked) {
    showError('consent');
    isValid = false;
  } else {
    hideError('consent');
  }

  // If form is valid
  if (isValid) {
    form.reset();
    showSuccessMessage();
  }
});

function showError(field) {
  document.querySelector(`[data-error="${field}"]`).style.display = 'block';
}

function hideError(field) {
  document.querySelector(`[data-error="${field}"]`).style.display = 'none';
}

function showSuccessMessage() {
  successMessage.classList.remove('hidden');
  setTimeout(() => {
    successMessage.classList.add('hidden');
  }, 4000);
}
