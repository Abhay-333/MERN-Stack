import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { linkService } from '../../../services/api';

const ProfilePage = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLinks = async () => {
      try {
      
        const response = await linkService.getLinksByUsername(username);
        console.log(response)
          // Handle both direct array and object with links property
        const linksData = Array.isArray(response.data) ? response.data : response.data.links;
        setLinks(linksData || []);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, [username]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
        <div className="text-white text-xl">Loading profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-xl p-8 text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl text-white font-bold">
              {username.charAt(0).toUpperCase()}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">@{username}</h1>
          <p className="text-gray-600">All my links in one place</p>
        </div>

        {/* Links Section */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          {links.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">This user hasn't added any links yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {links.map((link) => (
                <a
                  key={link._id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{link.title}</h3>
                  <p className="text-sm text-gray-600 truncate mb-2">{link.url}</p>
                  <p className="text-xs text-gray-500">👁️ {link.clicks || 0} clicks</p>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/')}
            className="text-white hover:underline font-semibold"
          >
            Create your LinkTree
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
