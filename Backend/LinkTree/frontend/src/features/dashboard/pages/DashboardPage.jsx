import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../../context/AuthContext';
import LinkForm from '../components/LinkForm';
import LinksList from '../components/LinksList';

const DashboardPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [links, setLinks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddLink = (newLink) => {
    setLinks([...links, newLink]);
    setShowForm(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDeleteLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">LinkTree</h1>
          <div className="flex gap-4 items-center">
            <span className="text-gray-700">Welcome, <span className="font-semibold">{user?.username}</span></span>
            <button
              onClick={() => navigate(`/profile/${user?.username}`)}
              className="text-blue-600 hover:underline font-semibold"
            >
              View Profile
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Link</h2>
              
              {showForm ? (
                <div>
                  <LinkForm onAddLink={handleAddLink} />
                  <button
                    onClick={() => setShowForm(false)}
                    className="w-full mt-4 bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  + Add Link
                </button>
              )}
            </div>
          </div>

          {/* Right - Links List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Links</h2>
              
              {links.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No links yet. Add your first link!</p>
                </div>
              ) : (
                <LinksList links={links} onDeleteLink={handleDeleteLink} />
              )}
            </div>

            {/* Preview Section */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Preview</h2>
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg p-8 text-white text-center">
                <h3 className="text-3xl font-bold mb-2">@{user?.username}</h3>
                <p className="text-blue-100 mb-6">All my links in one place</p>
                {links.length > 0 && (
                  <div className="space-y-3">
                    {links.slice(0, 3).map((link, index) => (
                      <div key={index} className="bg-white bg-opacity-20 py-2 px-4 rounded-lg">
                        {link.title}
                      </div>
                    ))}
                    {links.length > 3 && <p className="text-sm">+{links.length - 3} more links</p>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
