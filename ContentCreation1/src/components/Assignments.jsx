import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Assignments() {
  const navigate = useNavigate();
  const [assignments, setAssignments] = useState([]);

  const addAssignment = (type) => {
    const newAssignment = {
      id: Date.now(),
      type,
      question: '',
      options: type === 'multiple' ? ['', '', '', ''] : '',
      correctAnswer: '',
    };
    setAssignments([...assignments, newAssignment]);
  };

  const handleAssignmentChange = (id, field, value) => {
    setAssignments(assignments.map(assignment => 
      assignment.id === id ? { ...assignment, [field]: value } : assignment
    ));
  };

  const handleOptionChange = (assignmentId, optionIndex, value) => {
    setAssignments(assignments.map(assignment => {
      if (assignment.id === assignmentId) {
        const newOptions = [...assignment.options];
        newOptions[optionIndex] = value;
        return { ...assignment, options: newOptions };
      }
      return assignment;
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/feedback');
  };

  return (
    <div className="bg-primary/10 rounded-lg p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Create Assignments</h1>
      
      <div className="space-y-4 mb-8">
        <button
          onClick={() => addAssignment('multiple')}
          className="mr-4 bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary/90 transition-colors"
        >
          Add Multiple Choice
        </button>
        <button
          onClick={() => addAssignment('fill')}
          className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary/90 transition-colors"
        >
          Add Fill in the Blank
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="p-4 border border-gray-200 rounded-lg space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Question
              </label>
              <input
                type="text"
                value={assignment.question}
                onChange={(e) => handleAssignmentChange(assignment.id, 'question', e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            {assignment.type === 'multiple' ? (
              <div className="space-y-2">
                {assignment.options.map((option, index) => (
                  <div key={index}>
                    <label className="block text-gray-700 font-medium mb-2">
                      Option {index + 1}
                    </label>
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => handleOptionChange(assignment.id, index, e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Correct Answer
                </label>
                <input
                  type="text"
                  value={assignment.correctAnswer}
                  onChange={(e) => handleAssignmentChange(assignment.id, 'correctAnswer', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
            )}
          </div>
        ))}

        {assignments.length > 0 && (
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Continue
          </button>
        )}
      </form>
    </div>
  );
}

export default Assignments;