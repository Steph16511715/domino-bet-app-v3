import React from 'react';

const LoginScreen = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Login</h1>
      <input type="text" placeholder="Username" className="block mt-4 p-2 border" />
      <input type="password" placeholder="Password" className="block mt-2 p-2 border" />
      <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">Login</button>
    </div>
  );
};

export default LoginScree
