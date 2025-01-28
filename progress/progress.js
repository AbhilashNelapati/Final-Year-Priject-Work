// script.js

// Sample data of enrolled courses and their progress
const enrolledCourses = [
    { title: "HTML Basics", progress: 75 },
    { title: "CSS Advanced", progress: 50 },
    { title: "JavaScript Essentials", progress: 90 },
];

// Dynamically render courses and their progress
function renderCourses() {
    const coursesContainer = document.getElementById("courses");
    enrolledCourses.forEach(course => {
        const courseElement = document.createElement("div");
        courseElement.className = "course";

        // Course title
        const titleElement = document.createElement("div");
        titleElement.className = "course-title";
        titleElement.textContent = course.title;

        // Progress bar
        const progressBarContainer = document.createElement("div");
        progressBarContainer.className = "progress-bar";

        const progressBar = document.createElement("div");
        progressBar.className = "progress";
        progressBar.style.width = `${course.progress}%`;

        progressBarContainer.appendChild(progressBar);

        // Add elements to course container
        courseElement.appendChild(titleElement);
        courseElement.appendChild(progressBarContainer);

        // Add course container to main container
        coursesContainer.appendChild(courseElement);
    });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", renderCourses);
