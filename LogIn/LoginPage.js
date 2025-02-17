import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import '';  // Assuming you have the same CSS file
import './LoginPage.css';


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUUyuTDhFelAx53elUquiAASa6BXTOVLw",
    authDomain: "final-year-project-t-16.firebaseapp.com",
    projectId: "final-year-project-t-16",
    storageBucket: "final-year-project-t-16.firebasestorage.app",
    messagingSenderId: "446310001725",
    appId: "1:446310001725:web:ea307acade95404d71ce54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

// Sign in form submission
// Sign in form submission
const signinform = document.getElementById("signinForm");
signinform.addEventListener("submit", async (e) => {
    e.preventDefault();

    const signinemail = document.getElementById("signinemail").value.trim();
    const signinpassword = document.getElementById("signinpassword").value.trim();

    try {
        // Try signing in with Firebase
        const userCredential = await signInWithEmailAndPassword(auth, signinemail, signinpassword);
        
        // If successful, redirect to the specified URL
        window.location.href = "C:\Users\scet2\OneDrive\Desktop\Final-Year-Project-Work-master\project\src\App.jsx"; // Redirect to this URL after successful login
    } catch (error) {
        if (error.code === "auth/user-not-found") {
            alert("No user found with this email.");
        } else if (error.code === "auth/wrong-password") {
            alert("Incorrect password. Please try again.");
        } else {
            alert("Error signing in: " + error.message);
        }
    }
});


// Password visibility toggle
const passwordField = document.getElementById("signinpassword");
const password1Icon = document.getElementById("password1");
const password2Icon = document.getElementById("password2");

password1Icon.addEventListener("click", togglePasswordVisibility);
password2Icon.addEventListener("click", togglePasswordVisibility);

function togglePasswordVisibility() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        password1Icon.style.display = "block";
        password2Icon.style.display = "none";
    } else {
        passwordField.type = "password";
        password1Icon.style.display = "none";
        password2Icon.style.display = "block";
    }
}
