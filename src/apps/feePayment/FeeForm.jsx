import React, { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import axios from "axios";

// Reusable class names
const inputClasses = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const labelClasses = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
const selectClasses = inputClasses;

function InputField({ label, id, name, type, value, onChange, placeholder, pattern, required = true }) {
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={inputClasses}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
      />
    </div>
  );
}

function SelectField({ label, id, name, value, onChange, options, required = true }) {
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={selectClasses}
        required={required}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function FeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    fathers_name: "",
    student_id: "",
    year: "",
    stream: "",
    batch: "",
  });

  const [fee, setFee] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "contact" ? Number(value) : value,
    }));

    // Logic to calculate fee based on stream and year
    if ((name === "stream" && formData.year) || (name === "year" && formData.stream)) {
      const feeMap = {
        JEE: "12000",
        NEET: "12000",
        Foundation: "15000",
        "11th": "12000",
        "12th": "12000",
        "12th Pass": "15000",
      };
      setFee(feeMap[formData.stream] || feeMap[formData.year] || "");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const backend_url = import.meta.env.VITE_BACKEND_URL;
    try {
      const response = await axios.post(`${backend_url}/api/payment/add`, formData);
      console.log(response.data);
      alert("Payment details submitted successfully!");
      // Clear form after successful submission
      setFormData({
        name: "",
        contact: "",
        email: "",
        fathers_name: "",
        student_id: "",
        year: "",
        stream: "",
        batch: "",
      });
      setFee("");
    } catch (error) {
      console.error("Error submitting payment details:", error);
      alert("Failed to submit payment details. Please try again.");
    }
  };

  return (
    <div className="p-5 sm:p-0 sm:w-1/2 mx-auto sm:my-12">
      <div className="bg-[#eee9ea]/100 p-3 px-5 rounded-md pb-3 shadow-md">
        <form onSubmit={handleSubmit} className="z-40">
          <h1 className="text-2xl font-bold text-gray-800 md:text-xl lg:text-xl text-center mb-4">
            Payment Details
          </h1>
          <div className="grid gap-2 mb-3 md:grid-cols">
            <InputField
              label="Name"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
            <InputField
              label="Contact Number"
              id="contact"
              name="contact"
              type="tel"
              value={formData.contact}
              onChange={handleChange}
              placeholder="9956875787"
              pattern="[0-9]{10}"
            />
            <InputField
              label="Email address"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
            />
            <InputField
              label="Father's Name"
              id="fathers_name"
              name="fathers_name"
              type="text"
              value={formData.fathers_name}
              onChange={handleChange}
              placeholder="Father's Name"
            />
            <InputField
              label="Student ID"
              id="student_id"
              name="student_id"
              type="text"
              value={formData.student_id}
              onChange={handleChange}
              placeholder="Enter Student ID"
            />
            <SelectField
              label="Year"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              options={["11th", "12th", "12th Pass"]}
            />
            <SelectField
              label="Stream"
              id="stream"
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              options={["JEE", "NEET", "Foundation"]}
            />
            <InputField
              label="Batch"
              id="batch"
              name="batch"
              type="text"
              value={formData.batch}
              onChange={handleChange}
              placeholder="Enter Batch"
            />
          </div>

          {fee && (
            <div className="mb-3">
              <label htmlFor="fee" className={labelClasses}>
                Fee to be paid
              </label>
              <input
                type="text"
                id="fee"
                className={inputClasses}
                value={`INR ${fee}`}
                readOnly
              />
            </div>
          )}

          <div className="flex items-start mb-6">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              I agree with the{" "}
              <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                terms and conditions
              </a>
              .
            </label>
          </div>

          <PrimaryButton
            type="submit"
            disabled={!fee}
            className="mx-auto flex lg:px-6 lg:pt-2 lg:pb-2 sm:px-6 sm:py-3 sm:text-lg font-semibold tracking-wider rounded-md outline outline-2 outline-red-800 outline-offset-2 hover:bg-red-700"
            label="Pay Now"
          />
        </form>
      </div>
    </div>
  );
}

export default FeeForm;