// Input.js

import React from 'react';

const Input = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <div className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input 
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
      />
    </div>
  );
};

export default Input;
