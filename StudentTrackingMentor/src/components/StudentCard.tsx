import React from 'react';
import { Student } from '../types';
import { User } from 'lucide-react';

interface StudentCardProps {
  student: Student;
  onClick: (student: Student) => void;
}

export function StudentCard({ student, onClick }: StudentCardProps) {
  return (
    <div
      onClick={() => onClick(student)}
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer transform transition-transform hover:scale-105"
    >
      <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden bg-gray-100">
        {student.imageUrl ? (
          <img
            src={student.imageUrl}
            alt={student.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 truncate">{student.name}</h3>
      <p className="text-sm text-gray-600">{student.class}</p>
    </div>
  );
}