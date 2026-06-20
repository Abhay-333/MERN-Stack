import React from 'react';
import { useNavigate } from 'react-router';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">LinkTree</h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Share all your links in one beautiful place
        </p>
        <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
          Create a personalized landing page with all your important links. Share it with your audience and track clicks.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => navigate('/register')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/login')}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Sign In
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="border border-white p-6 rounded-lg backdrop-blur">
            <div className="text-3xl mb-2">🔗</div>
            <h3 className="text-lg font-semibold mb-2">Organize Links</h3>
            <p className="text-sm text-blue-100">Add all your important links in one place</p>
          </div>
          
          <div className="border border-white p-6 rounded-lg backdrop-blur">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="text-lg font-semibold mb-2">Track Clicks</h3>
            <p className="text-sm text-blue-100">Monitor how many people click your links</p>
          </div>
          
          <div className="border border-white p-6 rounded-lg backdrop-blur">
            <div className="text-3xl mb-2">👥</div>
            <h3 className="text-lg font-semibold mb-2">Share Profile</h3>
            <p className="text-sm text-blue-100">Get a beautiful profile page to share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
