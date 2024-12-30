<?php
session_start();

// Sample database connection (replace with your actual database details)
$host = 'localhost';
$dbname = 'your_database';
$username = 'root';
$password = '';

// Establish database connection
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Get the submitted email and password
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// Basic validation (more validation needed in production)
if (empty($email) || empty($password)) {
    echo "Please enter both email and password.";
    exit;
}

// Prepare and execute the query to find the user by email
$sql = "SELECT * FROM users WHERE email = :email LIMIT 1";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':email', $email, PDO::PARAM_STR);
$stmt->execute();

// Check if user exists and verify password
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    // Assuming the password is hashed in the database
    if (password_verify($password, $user['password'])) {
        // Start a session for the logged-in user
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['email'] = $user['email'];

        // Redirect to a dashboard or home page
        header("Location: dashboard.php");
        exit;
    } else {
        echo "Incorrect password.";
    }
} else {
    echo "No account found with that email.";
}
?>
