import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CourseNameLevel() {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState('');
  const [level, setLevel] = useState('');
  const [videoFile, setVideoFile] = useState(null);

  const courseOptions = [
    { value: 'full-stack', label: 'Full Stack Development' },
    { value: 'web-developer', label: 'Web Developer' },
    { value: 'java', label: 'Java Programming' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python Programming' },
    { value: 'react', label: 'React Development' },
    { value: 'node', label: 'Node.js Development' },
    { value: 'data-science', label: 'Data Science' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/video-description');
  };

  return (
    <div className="bg-primary/10 rounded-lg p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Create New Course</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="courseName" className="block text-gray-700 font-medium mb-2">
            Course Name
          </label>
          <select
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          >
            <option value="">Select Course</option>
            {courseOptions.map((course) => (
              <option key={course.value} value={course.value}>
                {course.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="level" className="block text-gray-700 font-medium mb-2">
            Course Level
          </label>
          <select
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          >
            <option value="">Select Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label htmlFor="video" className="block text-gray-700 font-medium mb-2">
            Upload Video
          </label>
          <input
            type="file"
            id="video"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default CourseNameLevel;