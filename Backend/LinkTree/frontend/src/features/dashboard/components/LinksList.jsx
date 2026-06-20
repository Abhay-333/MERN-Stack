import React from 'react';

const LinksList = ({ links, onDeleteLink }) => {
  return (
    <div className="space-y-3">
      {links.map((link, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition"
        >
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">{link.title}</h3>
            <p className="text-sm text-gray-600 truncate">{link.url}</p>
            <p className="text-xs text-gray-500 mt-1">👁️ {link.clicks || 0} clicks</p>
          </div>
          <button
            onClick={() => onDeleteLink(index)}
            className="ml-4 bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition text-sm font-semibold"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default LinksList;
