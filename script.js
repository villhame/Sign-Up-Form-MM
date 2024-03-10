function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var passwordError = document.getElementById("password-error");

    // Check if both passwords match
    if (password === confirmPassword) {
        // If they match, submit the form
        passwordError.style.display = "none";
        document.getElementById("signup-form").submit();
    } else {
        // If they don't match, prevent form submit and show error
        passwordError.style.display = "block"; // Show the error message
        event.preventDefault(); // Prevent the form from submitting
    }
}

// Add event listener for form submission to validate passwords
document.getElementById('signup-form').addEventListener('submit', validatePassword);
