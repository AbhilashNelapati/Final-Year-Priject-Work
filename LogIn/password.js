
document.addEventListener("DOMContentLoaded", function () {
    // Password visibility toggle
    function togglePasswordVisibility(inputId, iconId) {
        const passwordField = document.getElementById(inputId);
        const icon = document.getElementById(iconId);
        icon.addEventListener("click", function () {
            if (passwordField.type === "password") {
                passwordField.type = "text";
                icon.src = "eye-open-icon.png"; // Change to open eye icon
            } else {
                passwordField.type = "password";
                icon.src = "eye-close-icon.png"; // Change to closed eye icon
            }
        });
    }

    // Apply toggle password visibility for both fields
    togglePasswordVisibility("password", "eye-icon1");
    togglePasswordVisibility("confirmpassword", "eye-icon2");
});

// Function to toggle password visibility
function togglePasswordVisibility(passwordFieldId, showIconId, hideIconId) {
    const passwordField = document.getElementById(passwordFieldId);
    const showIcon = document.getElementById(showIconId);
    const hideIcon = document.getElementById(hideIconId);

    if (passwordField.type === "password") {
        passwordField.type = "text";  // Show password
        showIcon.style.display = "block";  // Show the "visible" icon
        hideIcon.style.display = "none";  // Hide the "hidden" icon
    } else {
        passwordField.type = "password";  // Hide password
        showIcon.style.display = "none";  // Hide the "visible" icon
        hideIcon.style.display = "block";  // Show the "hidden" icon
    }
}
