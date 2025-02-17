import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const students = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
  class: "CSE",
  year: "Final Year",
  location: "Tanuku",
  courses: ["React", "Node.js", "AI Basics"],
  progress: Math.floor(Math.random() * 100),
}));

export default function MentorDashboard() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <Button variant="link" onClick={() => window.history.back()}>
          <ArrowLeft className="mr-2" /> Back
        </Button>
        <nav className="space-x-6">
          <Button variant="ghost">User</Button>
          <Button variant="ghost">Courses</Button>
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Contact</Button>
          <Button variant="ghost">Feedback</Button>
        </nav>
      </header>

      <div className="grid grid-cols-5 gap-4">
        {students.map((student) => (
          <Card key={student.id} className="cursor-pointer" onClick={() => setSelectedStudent(student)}>
            <CardContent className="p-4 text-center">
              <img
                src={`https://i.pravatar.cc/100?img=${student.id}`}
                alt={student.name}
                className="w-20 h-20 rounded-full mx-auto mb-2"
              />
              <p className="text-lg font-semibold">{student.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedStudent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-2">{selectedStudent.name}</h2>
            <p>Class: {selectedStudent.class}</p>
            <p>Year: {selectedStudent.year}</p>
            <p>Location: {selectedStudent.location}</p>
            <p>Courses Enrolled:</p>
            <ul className="list-disc list-inside">
              {selectedStudent.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
            <p className="mt-2">Completion:</p>
            <Progress value={selectedStudent.progress} className="w-full" />
            <Button className="mt-4 w-full" onClick={() => setSelectedStudent(null)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
