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
$confirm_password = $_POST['confirm_password'] ?? '';

// Basic validation
if (empty($email) || empty($password) || empty($confirm_password)) {
    echo "Please fill all fields.";
    exit;
}

// Check if passwords match
if ($password !== $confirm_password) {
    echo "Passwords do not match.";
    exit;
}

// Check if the email is already registered
$sql = "SELECT * FROM users WHERE email = :email LIMIT 1";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':email', $email, PDO::PARAM_STR);
$stmt->execute();

$user = $stmt->fetch(PDO::FETCH_ASSOC);
if ($user) {
    echo "An account with this email already exists.";
    exit;
}

// Hash the password before storing it
$hashed_password = password_hash($password, PASSWORD_BCRYPT);

// Insert the new user into the database
$sql = "INSERT INTO users (email, password) VALUES (:email, :password)";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':email', $email, PDO::PARAM_STR);
$stmt->bindParam(':password', $hashed_password, PDO::PARAM_STR);

if ($stmt->execute()) {
    echo "Account created successfully! You can now <a href='login.html'>login</a>.";
} else {
    echo "An error occurred while creating your account.";
}
?>
