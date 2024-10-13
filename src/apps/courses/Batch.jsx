import { useState, useEffect } from "react";
import axios from "axios";
// import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";


const Batch = () => {
  const [batches, setBatches] = useState([]); // Original batches
  const [filteredBatches, setFilteredBatches] = useState([]); // Batches to display
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem("token");

  const className =
    "w-fit text-sm font-bold tracking-wider text-black bg-white rounded-md sm:w-52 sm:px-6 sm:py-3 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 sm:text-lg outline outline-2 outline-red-800 outline-offset-2 focus:bg-red-900 focus:text-white";

  // Function to fetch batches from the API
  const fetchBatches = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get(`${backend_url}/api/batches/get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBatches(response.data.reverse()); // Reverse the order to show latest first
      setFilteredBatches(response.data.reverse()); // Initialize filtered batches
    } catch (error) {
      console.error(error);
      setError("Failed to fetch batches. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  const changeHandler = (type) => {
    if (type) {
      console.log("batch inside change handler: ", batches, type);
      const filtered = batches.filter((batch) => {
        // Check if batch and batch.class_name exist before calling toLowerCase()
        return batch && batch.class_name && batch.class_name.toLowerCase().includes(type.toLowerCase());
      });
      setFilteredBatches(filtered);
      console.log("filtered: ", filtered);
    } else {
      setFilteredBatches(batches);
    }
  };

  // Fetch batches on component mount
  useEffect(() => {
    fetchBatches();
    console.log("filtered: ",filteredBatches);
  }, []);

  return (
    <section className="grid gap-5 sm:gap-12 sm:mb-4 batch-courses">
      <h1 className="sm:p-5 mx-auto text-4xl font-bold text-white md:text-5xl">
        Join our latest batches
      </h1>
      <div className="flex gap-5 sm:flex sm:flex-row sm:justify-center sm:gap-10 buttons">
        <SecondaryButton
          onClick={() => changeHandler('jee')}
          className={className}
          label="JEE"
        />
        <SecondaryButton
          onClick={() => changeHandler('neet')}
          className={className}
          label="NEET"
        />
        <SecondaryButton
          onClick={() => changeHandler('foundation')}
          className={className}
          label="FOUNDATION"
        />
        <SecondaryButton
          onClick={() => changeHandler("")} // Reset filtering on clicking "Show All"
          className={className}
          label="Show All"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:place-items-center">
        {loading ? (
          <div className="col-span-full text-center">
            <p className="text-gray-500">Loading batches...</p>
          </div>
        ) : error ? (
          <div className="col-span-full text-center">
            <p className="text-red-600">{error}</p>
          </div>
        ) : filteredBatches.length === 0 ? (
          <div className="col-span-full text-center">
            <div className="p-5 bg-gray-200 rounded-lg shadow-md">
              <h5 className="mb-2 text-lg font-semibold text-gray-900">
                No Batches Available
              </h5>
              <p className="text-gray-600">Please check back later.</p>
            </div>
          </div>
        ) : (
          filteredBatches.map(
            (
              { batch_name, fee, start_date, target_year, class: class_name },
              index
            ) => (
              <div
                key={index}
                className="sm:grid sm:grid-cols-2 transition-all duration-300 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg sm:hover:scale-105 hover:bg-slate-50"
              >
                <div className="p-5">
                  {class_name.toLowerCase().includes("jee") && (
                    <img
                      className="object-cover rounded-lg h-full"
                      src="https://www.adarshbarnwal.com/wp-content/uploads/2022/03/Jee-Mains.jpg"
                      alt={class_name}
                    />
                  )}
                  {class_name.toLowerCase().includes("neet") && (
                    <img
                      className="object-cover rounded-lg h-full"
                      src="https://www.vvtcoaching.com/neet/wp-content/uploads/2018/09/All-you-need-to-know-about-.jpg"
                      alt={class_name}
                    />
                  )}
                  {class_name.toLowerCase().includes("foundation") && (
                    <img
                      className="object-cover rounded-lg h-full"
                      src="https://www.thengpschool.ac.in/asset/frontend/images/about/accrediation/left-banner.jpg"
                      alt={class_name}
                    />
                  )}
                </div>
                <div className="grid px-5 py-5">
                  <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    {batch_name}
                  </h5>
                  <h5 className="mb-2 font-semibold tracking-tight text-gray-600 dark:text-white">
                    {class_name}
                  </h5>
                  <h5 className="mb-2 font-semibold tracking-tight text-gray-600 dark:text-white">
                    Start Date: {start_date}
                  </h5>
                  <h5 className="mb-2 font-semibold tracking-tight text-gray-600 dark:text-white">
                    Year: {target_year}
                  </h5>
                  <h5 className="mb-2 font-semibold tracking-tight text-gray-600 dark:text-white">
                    Fee: {fee}
                  </h5>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg w-fit hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Enroll
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            )
          )
        )}
      </div>
    </section>
  );
};

export default Batch;
