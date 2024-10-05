import { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    stream: "",
    classes: "",
    contact: "",
    email: "",
  });

  // Function to handle form field changes
  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert contact field to number if it's the contact input
    const updatedValue = name === "contact" ? Number(value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const backend_url = import.meta.env.VITE_BACKEND_URL;
    // const token = localStorage.getItem("token");
    // console.log(token);

    // Prepare the data to be sent to the API
    const dataToSend = {
      name: formData.name,
      stream: formData.stream,
      class: formData.classes,
      contact: formData.contact,
      email: formData.email,
    };

    try {
      console.log(dataToSend);
      // Make the API request
      const response = await fetch(`${backend_url}/api/registration/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      // Handle success response
      const result = await response.text();
      console.log(result);
      // alert("Registration successful!");
      if (result.trim().toLowerCase() === "registered") {
        alert("Registration successful!");
      }

      // Optionally, clear the form after successful submission
      setFormData({
        name: "",
        stream: "",
        classes: "",
        contact: "",
        email: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <>
      <div className="bg-[#eee9ea]/100 p-3 px-5 rounded-md pb-6 shadow-md">
        <form className="z-40" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-gray-800 md:text-xl lg:text-xl text-center">
            Course Registration
          </h1>

          <div className="grid gap-2 mb-6 md:grid-cols">
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
                className={inputClass}
                placeholder="John"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
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
                  className={inputClass}
                  value={formData.stream}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Stream</option>
                  <option value="Science">Science</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="classes"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Moving Class
                </label>
                <select
                  id="classes"
                  name="classes"
                  className={inputClass}
                  value={formData.classes}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Class</option>
                  <option value="11th">11th</option>
                  <option value="12th">12th</option>
                  <option value="12th Pass">12th Pass (Dropper)</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="contact"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                className={inputClass}
                placeholder="+91 9835098709"
                value={formData.contact}
                onChange={handleChange}
                required
                pattern="[0-9]*" // Ensures that only numbers can be entered
              />
            </div>
          </div>

          <div className="mb-6">
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
              className={inputClass}
              placeholder="john.doe@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
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

          <PrimaryButton
            className="mx-auto flex lg:px-6 lg:pt-2 lg:pb-2 sm:px-6 sm:py-3 sm:text-lg font-semibold tracking-wider rounded-md outline outline-2 outline-red-800 outline-offset-2 hover:bg-red-700"
            label="Submit"
          />
        </form>
      </div>
    </>
  );
}

export default Register;
