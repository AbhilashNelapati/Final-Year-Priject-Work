import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Feedback() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([{ question: '' }]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '' }]);
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Course creation completed!');
    navigate('/');
  };

  return (
    <div className="bg-primary/10 rounded-lg p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Create Feedback Questions</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((q, index) => (
          <div key={index}>
            <label className="block text-gray-700 font-medium mb-2">
              Feedback Question {index + 1}
            </label>
            <input
              type="text"
              value={q.question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddQuestion}
          className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary/90 transition-colors"
        >
          Add Another Question
        </button>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Complete Course Creation
        </button>
      </form>
    </div>
  );
}

export default Feedback;