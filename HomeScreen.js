
import React from 'react';

const HomeScreen = ({ onStartGame, onSettings }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Welcome to Domino Bet</h1>
      <button
        onClick={onStartGame}
        className="w-full bg-green-600 text-white py-2 rounded mb-4"
      >
        Start Game
      </button>
      <button
        onClick={onSettings}
        className="w-full bg-gray-300 text-black py-2 rounded"
      >
        Settings
      </button>
    </div>
  );
};

export default HomeScreen;
