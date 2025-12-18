// script.js

document.getElementById('loginForm').addEventListener('submit', function (e) {
    let validationPassed = true;

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');

    // Email validation
    if (!emailInput.value || !validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        validationPassed = false;
    } else {
        emailError.style.display = 'none';
    }

    // Password validation
    if (!passwordInput.value || passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        passwordError.style.display = 'block';
        validationPassed = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (!validationPassed) {
        e.preventDefault();
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
