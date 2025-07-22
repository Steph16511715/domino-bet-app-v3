
import React from 'react';

const SettingsScreen = ({ onBack }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Settings</h1>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Language</label>
        <select className="w-full p-2 border border-gray-300 rounded">
          <option>Kreyòl</option>
          <option>Français</option>
          <option>English</option>
          <option>Español</option>
          <option>Português</option>
        </select>
      </div>

      <button
        onClick={onBack}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default SettingsScreen
