import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { StudentCard } from './components/StudentCard';
import { StudentModal } from './components/StudentModal';
import { students } from './data';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link to="/home" className="text-xl font-bold text-gray-900">L.</Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              className="border rounded px-3 py-1 pr-10" />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Users className="cursor-pointer" />
          <span className="cursor-pointer">🌞</span>
        </div>
      </div>
    </nav>
  );
}

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md h-screen fixed top-0 left-0">
      <div className="p-4 border-b text-center">
        <img src="images/pic-1.jpg" alt="Profile of Shaikh Anas" className="w-16 h-16 rounded-full mx-auto" />
        <h3 className="font-bold mt-2">Shaikh Anas</h3>
        <p className="text-gray-600">Student</p>
        <Link to="/profile" className="text-blue-500 mt-2 inline-block">View Profile</Link>
      </div>
      <nav className="mt-4">
        {["home", "about", "courses", "teachers", "contact", "progress"].map((item) => (
          <Link key={item} to={`/${item}`} className="block py-2 px-4 hover:bg-gray-200 capitalize">
            {item}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="p-4">
          <h1 className="text-2xl font-bold">Student Progress Tracker</h1>
        </main>
      </div>
    </div>
  );
};

export default App;
