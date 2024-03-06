import React from 'react';

function Dropdown({ id, label, options, value, onChange, className }) {
    return (
        <div className={className}>
            <label htmlFor={id} className="block mb-1">{label}</label>
            <select id={id} value={value} onChange={onChange} className="w-full rounded-md border-none">
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
