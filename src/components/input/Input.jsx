// Input.js

import React from 'react';

const Input = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <div className="mb-4 ml-10">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input 
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded-md py-2 px-4 w-48 border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
      />
    </div>
  );
};

export default Input;
