// Sample data for demonstration
export const students = Array.from({ length: 60 }, (_, index) => ({
  id: `student-${index + 1}`,
  name: `Student ${index + 1}`,
  imageUrl: `https://source.unsplash.com/random/150x150?portrait&sig=${index}`,
  class: ['Computer Science', 'Data Science', 'Web Development'][Math.floor(Math.random() * 3)],
  year: Math.floor(Math.random() * 4) + 1,
  location: ['New York', 'San Francisco', 'London', 'Toronto', 'Sydney'][Math.floor(Math.random() * 5)],
  courses: [
    {
      id: 'course-1',
      name: 'Introduction to Programming',
      completionPercentage: Math.floor(Math.random() * 100),
    },
    {
      id: 'course-2',
      name: 'Data Structures',
      completionPercentage: Math.floor(Math.random() * 100),
    },
    {
      id: 'course-3',
      name: 'Web Development Fundamentals',
      completionPercentage: Math.floor(Math.random() * 100),
    },
  ],
}));