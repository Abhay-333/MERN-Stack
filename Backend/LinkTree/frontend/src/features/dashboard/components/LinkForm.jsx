import React, { useState } from 'react';
import { linkService } from '../../../services/api';

const LinkForm = ({ onAddLink }) => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await linkService.createLink(formData);
      onAddLink(response.data);
      setFormData({ title: '', url: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add link');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-sm">
          {error}
        </div>
      )}

      <div>
        <label className="block text-gray-700 font-semibold mb-2 text-sm">Link Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          placeholder="e.g. My Website"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2 text-sm">URL</label>
        <input
          type="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          placeholder="https://example.com"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold disabled:opacity-50 text-sm"
      >
        {loading ? 'Adding...' : 'Add Link'}
      </button>
    </form>
  );
};

export default LinkForm;
