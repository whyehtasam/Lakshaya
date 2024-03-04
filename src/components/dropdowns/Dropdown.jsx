import React from 'react';

function Dropdown({ id, label, options, value, onChange }) {
    return (
        <div className="mb-4 ml-10">
            <label htmlFor={id} className="block mb-1">{label}</label>
            <select id={id} value={value} onChange={onChange} className="w-half px-3 py-2 border rounded-md">
                <option value="">Select {label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
