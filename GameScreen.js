
import React from 'react';

const GameScreen = ({ onBack }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Domino Game</h1>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-200 p-4 rounded text-center">Player 1</div>
        <div className="bg-gray-200 p-4 rounded text-center">Player 2</div>
        <div className="bg-gray-200 p-4 rounded text-center">Player 3</div>
        <div className="bg-gray-200 p-4 rounded text-center">Player 4</div>
      </div>

      <div className="bg-white p-4 border border-gray-300 rounded mb-4">
        <p className="text-center">Game board will appear here.</p>
      </div>

      <button
        onClick={onBack}
        className="w-full bg-red-600 text-white py-2 rounded"
      >
        Quit Game
      </button>
    </div>
  );
};

export default GameScreen;
