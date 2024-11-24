document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (validateForm(email, password)) {
    alert('Login successful!');
    // Add your login logic here (e.g., API call)
  }
});

function validateForm(email, password) {
  if (!email || !password) {
    alert('Please fill in all fields.');
    return false;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
