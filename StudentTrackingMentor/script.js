// Sample data
const students = Array.from({ length: 60 }, (_, index) => ({
    id: `student-${index + 1}`,
    name: `Student ${index + 1}`,
    imageUrl: `https://source.unsplash.com/random/150x150?student,portrait&sig=${index}`,
    class: ['Computer Science', 'Data Science', 'Web Development'][Math.floor(Math.random() * 3)],
    year: Math.floor(Math.random() * 4) + 1,
    location: ['New York', 'San Francisco', 'London', 'Toronto', 'Sydney'][Math.floor(Math.random() * 5)],
    courses: [
        {
            id: 'course-1',
            name: 'Introduction to Programming',
            completionPercentage: Math.floor(Math.random() * 100),
            courseImage: 'https://source.unsplash.com/random/800x600?coding,programming'
        },
        {
            id: 'course-2',
            name: 'Data Structures',
            completionPercentage: Math.floor(Math.random() * 100),
            courseImage: 'https://source.unsplash.com/random/800x600?data,technology'
        },
        {
            id: 'course-3',
            name: 'Web Development Fundamentals',
            completionPercentage: Math.floor(Math.random() * 100),
            courseImage: 'https://source.unsplash.com/random/800x600?website,development'
        },
    ],
}));

// DOM Elements
const studentGrid = document.getElementById('studentGrid');
const modal = document.getElementById('studentModal');
const closeModal = document.getElementById('closeModal');
const modalStudentImage = document.getElementById('modalStudentImage');
const modalStudentName = document.getElementById('modalStudentName');
const modalStudentLocation = document.getElementById('modalStudentLocation');
const modalStudentClass = document.getElementById('modalStudentClass');
const coursesList = document.getElementById('coursesList');

// Initialize Lucide icons
lucide.createIcons();

// Create student cards
function createStudentCards() {
    studentGrid.innerHTML = students.map(student => `
        <div class="student-card" data-student-id="${student.id}">
            <div class="student-image-container">
                <img src="${student.imageUrl}" alt="${student.name}" class="student-image">
            </div>
            <h3 class="student-name">${student.name}</h3>
            <p class="student-class">${student.class}</p>
        </div>
    `).join('');
}

// Show student modal
function showStudentModal(student) {
    modalStudentImage.src = student.imageUrl;
    modalStudentImage.alt = student.name;
    modalStudentName.textContent = student.name;
    modalStudentLocation.textContent = student.location;
    modalStudentClass.textContent = `${student.class} • Year ${student.year}`;
    
    coursesList.innerHTML = student.courses.map(course => `
        <div class="course-item">
            <div class="course-image">
                <img src="${course.courseImage}" alt="${course.name}">
            </div>
            <div class="course-header">
                <span class="course-name">${course.name}</span>
                <span class="course-percentage">${course.completionPercentage}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-bar-fill" style="width: ${course.completionPercentage}%"></div>
            </div>
        </div>
    `).join('');
    
    modal.classList.remove('hidden');
}

// Event Listeners
studentGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.student-card');
    if (card) {
        const studentId = card.dataset.studentId;
        const student = students.find(s => s.id === studentId);
        if (student) {
            showStudentModal(student);
        }
    }
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

// Initialize the page
createStudentCards();