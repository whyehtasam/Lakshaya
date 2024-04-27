import React, { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";

function FeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    fatherName: "",
    studentId: "",
    stream: "",
    year: "",
    batch: "",
  });

  const [fee, setFee] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Mock logic to calculate fee based on stream and year
    if (name === "stream" && formData.year) {
      if (value === "PCM" || value === "PCB") {
        setFee("12000"); // Mock fee for PCM/PCB
      } else if (value === "Foundation") {
        setFee("15000"); // Mock fee for Foundation
      }
    } else if (name === "year" && formData.stream) {
      if (value === "11th" || value === "12th") {
        setFee("12000"); // Mock fee for 11th/12th
      } else if (value === "12th Pass") {
        setFee("15000"); // Mock fee for 12th Pass
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hash sensitive data before submission
    // const hashedName = bcrypt.hashSync(formData.name, 10);
    // const hashedPhone = bcrypt.hashSync(formData.phone, 10);
    // const hashedEmail = bcrypt.hashSync(formData.email, 10);
    // const hashedFatherName = bcrypt.hashSync(formData.fatherName, 10);
    // const hashedStudentId = bcrypt.hashSync(formData.studentId, 10);

    // setHashedData({
    //   name: hashedName,
    //   phone: hashedPhone,
    //   email: hashedEmail,
    //   fatherName: hashedFatherName,
    //   studentId: hashedStudentId,
    // });

    // Handle form submission logic
  };

  return (
    <div className="w-1/2 mx-auto mt-12">
      <div className="bg-[#eee9ea]/100 p-3 px-5 rounded-md pb-3 shadow-md ">
        <form onSubmit={handleSubmit} className="z-40">
          <h1 className="text-2xl font-bold text-gray-800 md:text-xl lg:text-xl text-center">
            Payment Details
          </h1>
          <div className="grid gap-2 mb-3 md:grid-cols ">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            {/* Phone Number */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone number
              </label>
              <div className="flex">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="+91"
                  readOnly
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block flex-1 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="9835098709"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            {/* Father's Name */}
            <div>
              <label
                htmlFor="fatherName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Father's Name
              </label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John's Father"
                required
              />
            </div>
            {/* Student ID/Roll */}
            <div>
              <label
                htmlFor="studentId"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Student ID/Roll
              </label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Student ID/Roll"
                required
              />
            </div>
            {/* Stream */}
            <div>
              <label
                htmlFor="stream"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Stream
              </label>
              <select
                id="stream"
                name="stream"
                value={formData.stream}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="">Select Stream</option>
                <option value="PCM">PCM</option>
                <option value="PCB">PCB</option>
                <option value="Foundation">Foundation</option>
              </select>
            </div>
            {/* Year */}
            <div>
              <label
                htmlFor="year"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Year
              </label>
              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="">Select Year</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
                <option value="12th Pass">12th Pass (Dropper)</option>
              </select>
            </div>
            {/* Batch */}
            <div>
              <label
                htmlFor="batch"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Batch
              </label>
              <input
                type="text"
                id="batch"
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Batch"
                required
              />
            </div>
          </div>
          {/* Fee */}
          {fee && (
            <div className="mb-3">
              <label
                htmlFor="fee"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fee to be paid
              </label>
              <input
                type="text"
                id="fee"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={`INR ${fee}`}
                readOnly
              />
            </div>
          )}
          {/* Terms & Conditions */}
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          {/* Submit Button */}
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
