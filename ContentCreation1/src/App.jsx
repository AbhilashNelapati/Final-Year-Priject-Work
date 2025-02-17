import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseNameLevel from './components/CourseNameLevel';
import VideoDescription from './components/VideoDescription';
import AdditionalContent from './components/AdditionalContent';
import Assignments from './components/Assignments';
import Feedback from './components/Feedback';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<CourseNameLevel />} />
            <Route path="/video-description" element={<VideoDescription />} />
            <Route path="/additional-content" element={<AdditionalContent />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;