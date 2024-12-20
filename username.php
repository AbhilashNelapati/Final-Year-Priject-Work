<?php
// Start the session
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_name'])) {
    // If not logged in, redirect to login page
    header("Location: login.php");
    exit();
}

// Get the logged-in user's name from the session
$userName = $_SESSION['user_name'];
?>
