
import React, { useState } from 'react';

const PaymentScreen = ({ onBack }) => {
  const [amount, setAmount] = useState('');

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Peman</h1>

      <label className="block mb-2 font-semibold">Antre kantite lajan</label>
      <input
        type="number"
        placeholder="Egzanp: 100 HTG"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label className="block mb-2 font-semibold">Chwazi metòd peman</label>
      <select className="w-full p-2 border border-gray-300 rounded mb-4">
        <option>MonCash</option>
        <option>NatCash</option>
        <option>Zelle</option>
        <option>Cash App</option>
        <option>PayPal</option>
      </select>

      <button className="w-full bg-green-600 text-white py-2 rounded mb-4">
        Fè Peman
      </button>

      <button
        onClick={onBack}
        className="w-full bg-gray-300 text
