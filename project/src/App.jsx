import React, { useState } from 'react';


import { 
  BookOpen, Award, Trophy, Target, Clock, 
  LayoutDashboard, GraduationCap, TrendingUp, 
  Video, ClipboardList, ChevronRight
} from 'lucide-react';

function NavItem({ icon: Icon, label, active, onClick }) {
  return (
    <div 
      className={`
        flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer
        ${active 
          ? 'bg-indigo-600 text-white' 
          : 'text-gray-600 hover:bg-gray-100 transition-colors'}
      `}
      onClick={onClick}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
      {active && <ChevronRight className="ml-auto" size={20} />}
    </div>
  );
}

function StatBox({ icon: Icon, title, value, subtitle, color }) {
  return (
    <div className={`${color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/80 font-medium">{title}</p>
          <h3 className="text-2xl font-bold text-white mt-2">{value}</h3>
          {subtitle && (
            <p className="text-white/60 text-sm mt-1">{subtitle}</p>
          )}
        </div>
        <Icon className="text-white/90" size={24} />
      </div>
    </div>
  );
}

function ActivityChart() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const values = [65, 45, 75, 50, 85, 35, 60];
  const maxValue = Math.max(...values);

  return (
    <div className="h-48 flex items-end justify-between gap-2">
      {days.map((day, index) => (
        <div key={day} className="flex flex-col items-center flex-1">
          <div 
            className="w-full bg-indigo-600 rounded-t-lg transition-all hover:bg-indigo-500"
            style={{ height: `${(values[index] / maxValue) * 100}%` }}
          />
          <span className="text-xs text-gray-600 mt-2">{day}</span>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [activeNav, setActiveNav] = useState('Progress');
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: BookOpen, label: 'Courses' },
    { icon: TrendingUp, label: 'Progress' },
    { icon: Video, label: 'Virtual Consultations' },
    { icon: ClipboardList, label: 'Assignments' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[250px] bg-white border-r border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-8">
          <GraduationCap className="text-indigo-600" size={32} />
          <h1 className="text-xl font-bold text-gray-900">Learning Portal</h1>
        </div>
        
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavItem 
              key={item.label}
              icon={item.icon} 
              label={item.label} 
              active={activeNav === item.label}
              onClick={() => setActiveNav(item.label)}
            />
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Learning Progress</h1>
              <p className="text-gray-600 mt-1">Track your learning journey and achievements</p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-500">Last updated:</span>
              <span className="font-medium text-gray-900">Today, 2:30 PM</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <StatBox
              icon={BookOpen}
              title="Courses Completed"
              value="12/15"
              subtitle="80% completion rate"
              color="bg-indigo-600"
            />
            <StatBox
              icon={Target}
              title="Assigned Courses"
              value="15"
              subtitle="3 pending completion"
              color="bg-emerald-600"
            />
            <StatBox
              icon={Award}
              title="Certifications"
              value="4"
              subtitle="2 earned this month"
              color="bg-purple-600"
            />
            <StatBox
              icon={Trophy}
              title="Points Earned"
              value="2,450"
              subtitle="Top 10% of learners"
              color="bg-blue-600"
            />
            <StatBox
              icon={Clock}
              title="Time Spent Learning"
              value="28h"
              subtitle="This week"
              color="bg-rose-600"
            />
          </div>

          {/* Activity Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Weekly Activity</h2>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Total Hours: 32</span>
                <select className="text-sm border rounded-lg px-3 py-1.5">
                  <option>This Week</option>
                  <option>Last Week</option>
                  <option>Last Month</option>
                </select>
              </div>
            </div>
            <ActivityChart />
          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Learning Activity</h2>
            <div className="space-y-4">
              {[
                { course: "Advanced React Patterns", time: "4 hours ago", progress: 85 },
                { course: "TypeScript Fundamentals", time: "2 days ago", progress: 100 },
                { course: "UI/UX Design Principles", time: "5 days ago", progress: 60 }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">{activity.course}</h3>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${activity.progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {activity.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;