import React, { useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [skillGaps, setSkillGaps] = useState([]);
  const [careerPaths, setCareerPaths] = useState([]);
  const [jobTrends, setJobTrends] = useState([]);

  const handleLogin = async () => {
    if (!userEmail) return;
    setIsLoggedIn(true);
    setActiveTab('dashboard');
  };

  const analyzeSkillGaps = async () => {
    try {
      const response = await axios.post(`${API_URL}/skill-gap/analyze`, {
        currentSkills: ['javascript', 'react', 'node.js']
      });
      setSkillGaps(response.data.skillGaps);
    } catch (error) {
      console.error('Error analyzing skills:', error);
    }
  };

  const getCareerPaths = async () => {
    try {
      const response = await axios.post(`${API_URL}/career-path/predict`, {
        currentRole: 'Software Engineer',
        experience: 3,
        skills: ['javascript', 'react', 'node.js']
      });
      setCareerPaths(response.data.recommendedPaths);
    } catch (error) {
      console.error('Error fetching career paths:', error);
    }
  };

  const getJobMarketTrends = async () => {
    try {
      const response = await axios.get(`${API_URL}/job-market/trends`);
      setJobTrends(response.data.emergingSkills);
    } catch (error) {
      console.error('Error fetching job market trends:', error);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-2xl p-10 w-96">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">SmartCareer AI</h1>
          <p className="text-gray-600 text-center mb-6">Personalized Career Growth Intelligence Platform</p>
          
          <input
            type="email"
            placeholder="Enter your email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">SmartCareer AI</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{userEmail}</span>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setUserEmail('');
              }}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 flex gap-8">
          <button
            onClick={() => {
              setActiveTab('dashboard');
              analyzeSkillGaps();
              getCareerPaths();
              getJobMarketTrends();
            }}
            className={`py-4 px-4 font-semibold border-b-2 ${activeTab === 'dashboard' ? 'border-white' : 'border-transparent'}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`py-4 px-4 font-semibold border-b-2 ${activeTab === 'skills' ? 'border-white' : 'border-transparent'}`}
          >
            Skill Analysis
          </button>
          <button
            onClick={() => setActiveTab('careers')}
            className={`py-4 px-4 font-semibold border-b-2 ${activeTab === 'careers' ? 'border-white' : 'border-transparent'}`}
          >
            Career Paths
          </button>
          <button
            onClick={() => setActiveTab('market')}
            className={`py-4 px-4 font-semibold border-b-2 ${activeTab === 'market' ? 'border-white' : 'border-transparent'}`}
          >
            Market Trends
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Skill Gaps</h3>
              <p className="text-4xl font-bold text-blue-600">{skillGaps.length}</p>
              <p className="text-gray-600">Opportunities to grow</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Career Paths</h3>
              <p className="text-4xl font-bold text-green-600">{careerPaths.length}</p>
              <p className="text-gray-600">Recommended roles</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Market Demand</h3>
              <p className="text-4xl font-bold text-purple-600">{jobTrends.length}</p>
              <p className="text-gray-600">Emerging skills</p>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-6">Your Skill Gaps</h2>
            <button
              onClick={analyzeSkillGaps}
              className="bg-blue-600 text-white px-6 py-2 rounded mb-6 hover:bg-blue-700"
            >
              Analyze Skills
            </button>
            
            {skillGaps.length > 0 && (
              <div className="space-y-4">
                {skillGaps.map((gap, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                    <h3 className="font-bold text-lg capitalize">{gap.skill}</h3>
                    <p className="text-gray-600">Demand Score: {gap.demandScore}/100</p>
                    <p className="text-green-600 font-semibold">Avg Salary: ${gap.potentialSalary.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Priority: <span className="font-bold text-red-600">{gap.priority}</span></p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'careers' && (
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-6">Recommended Career Paths</h2>
            <button
              onClick={getCareerPaths}
              className="bg-blue-600 text-white px-6 py-2 rounded mb-6 hover:bg-blue-700"
            >
              Get Career Paths
            </button>
            
            {careerPaths.length > 0 && (
              <div className="space-y-6">
                {careerPaths.map((path, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border-2 border-blue-200">
                    <h3 className="text-xl font-bold capitalize mb-2">{path.careerPath}</h3>
                    <p className="text-lg text-blue-600 font-bold">Match Score: {path.matchScore}%</p>
                    <p className="text-gray-700">Next Role: <span className="font-semibold">{path.nextRole}</span></p>
                    <p className="text-gray-700">Time to Next: <span className="font-semibold">{path.timeToNextRole} years</span></p>
                    <p className="text-green-600 font-bold">Projected Salary: ${path.projectedSalary.toLocaleString()}</p>
                    <p className="text-sm text-gray-600 mt-2">Skills to learn: {path.skillsToLearn.join(', ')}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'market' && (
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-6">Job Market Trends</h2>
            <button
              onClick={getJobMarketTrends}
              className="bg-blue-600 text-white px-6 py-2 rounded mb-6 hover:bg-blue-700"
            >
              Refresh Trends
            </button>
            
            {jobTrends.length > 0 && (
              <div className="space-y-4">
                {jobTrends.map((trend, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg capitalize">{trend.skill}</h3>
                    <p className="text-green-600 font-bold">Growth: +{trend.growth}%</p>
                    <p className="text-gray-600">Market Share: {trend.marketShare}%</p>
                    <p className="text-sm text-gray-500 capitalize">Trend: {trend.trend}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
