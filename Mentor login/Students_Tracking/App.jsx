import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const StudentDashboard = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/students")
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error("Error fetching students:", error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <header>
        <h1>Mentor Dashboard</h1>
        <nav>
          <a href="#">User</a>
          <a href="#">Courses</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
          <a href="#">Feedback</a>
        </nav>
        <a href="learning-portal/Home/Front-Page.html" className="back-button">Back</a>
      </header>
      <div className="student-grid">
        {students.map((student) => (
          <div 
            key={student.id} 
            className="student-box" 
            onClick={() => setSelectedStudent(student)}
          >
            <img src={student.image} alt={student.name} />
            <p>{student.name}</p>
          </div>
        ))}
      </div>
      {selectedStudent && (
        <div className="student-details">
          <h2>{selectedStudent.name}</h2>
          <p><strong>Class:</strong> {selectedStudent.class}</p>
          <p><strong>Year:</strong> {selectedStudent.year}</p>
          <p><strong>Location:</strong> {selectedStudent.location}</p>
          <p><strong>Enrolled Courses:</strong> {selectedStudent.courses.join(", ")}</p>
          <p><strong>Progress:</strong> {selectedStudent.progress}%</p>
          <button onClick={() => setSelectedStudent(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
