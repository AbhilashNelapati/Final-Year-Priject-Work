// Function to show course details and hide other courses
function showCourseDetails(courseName, duration, clickedElement) {
    // Hide all course boxes
    let courses = document.querySelectorAll('.course-box');
    courses.forEach(course => {
        course.style.display = "none"; // Hide all courses
    });

    // Show the clicked course's duration and highlight it
    clickedElement.style.display = "block"; // Ensure clicked course is still visible
    clickedElement.classList.add('active'); // Highlight clicked course

    // Show the course duration in the left container
    document.getElementById("courseDuration").innerText = duration;
    document.getElementById("durationBox").style.display = "block";

    // Change layout (left 30% and right 70%)
    document.querySelector(".left-container").style.width = "30%";
    document.querySelector(".right-container").style.width = "70%";

    // Display course details in the right side
    document.getElementById("courseTitle").innerText = courseName;
    document.getElementById("courseDescription").innerText = `${courseName} is a detailed course that lasts for ${duration}.`;

    // Show course details container
    document.getElementById("courseDetails").style.display = "block";

    // Show the Back button only after a course is selected
    document.getElementById("backButton").style.display = "block";
}

// Function to show all courses and reset layout
function backToCourses() {
    // Show all course boxes again
    let courses = document.querySelectorAll('.course-box');
    courses.forEach(course => {
        course.style.display = "block"; // Show all courses
        course.classList.remove('active'); // Remove the active class
    });

    // Hide the course details and duration box
    document.getElementById("courseDetails").style.display = "none";
    document.getElementById("durationBox").style.display = "none";

    // Reset the layout (left 100% and right 100%)
    document.querySelector(".left-container").style.width = "100%";
    document.querySelector(".right-container").style.width = "0%";

    // Hide the Back button
    document.getElementById("backButton").style.display = "none";
}
