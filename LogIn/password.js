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
