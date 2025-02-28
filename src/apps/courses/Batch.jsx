import { useState, useEffect, useContext } from "react";
import axios from "axios";
// import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { BatchContext } from "../../context/BatchContext";
import { Link } from "react-router-dom";
import Foundation from "../../assets/Foundation batch.jpg";
import Target from "../../assets/Target batch.jpg";
import New from "../../assets/New batch.jpg";
const Batch = () => {
  const [batches, setBatches] = useState([]); // Original batches
  const [filteredBatches, setFilteredBatches] = useState([]); // Batches to display
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { handleBatchData } = useContext(BatchContext);

  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem("token");

  const className =
    "w-fit text-sm font-bold tracking-wider text-black bg-white rounded-md sm:w-52 sm:px-6 sm:py-3 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 sm:text-lg outline outline-2 outline-red-800 outline-offset-2 focus:bg-red-900 focus:text-white data-[state=active]:";

  // Function to fetch batches from the API
  const fetchBatches = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get(`${backend_url}/api/batches/get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Process batches to add category based on class
      const processedBatches = response.data.reverse().map((batch) => {
        let category = "";
        const classNameLower = batch.class ? batch.class.toLowerCase() : ""; // Use the correct property

        if (classNameLower.includes("jee")) {
          category = "jee";
        } else if (classNameLower.includes("neet")) {
          category = "neet";
        } else if (classNameLower.includes("foundation")) {
          category = "foundation";
        }

        return {
          ...batch,
          category: category || null, // Set to null if no category matches
        };
      });

      setBatches(processedBatches); // Set processed batches
      setFilteredBatches(processedBatches); // Initialize filtered batches
    } catch (error) {
      console.error(error);
      setError("Failed to fetch batches. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  const changeHandler = (type) => {
    if (type) {
      const filtered = batches.filter((batch) => {
        return (
          batch.category && batch.category.toLowerCase() === type.toLowerCase()
        ); // Use category instead of class_name
      });
      setFilteredBatches(filtered);
    } else {
      setFilteredBatches(batches);
    }
  };

  const handleEnroll = (batch) => {
    handleBatchData(batch);
  };

  // Fetch batches on component mount
  useEffect(() => {
    fetchBatches();
  }, []);

  return (
    <section className="grid gap-5 sm:gap-12 sm:mb-4 batch-courses">
      <h1 className="sm:p-5 mx-auto text-4xl font-bold text-white md:text-5xl">
        Join our latest batches
      </h1>
      <div className="flex gap-5 sm:flex flex-wrap  sm:flex-row sm:justify-center sm:gap-10 buttons">
        <SecondaryButton
          onClick={() => changeHandler("jee")}
          className={className}
          label="JEE"
        />
        <SecondaryButton
          onClick={() => changeHandler("neet")}
          className={className}
          label="NEET"
        />
        <SecondaryButton
          onClick={() => changeHandler("foundation")}
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
              {
                batch_name,
                fee,
                start_date,
                target_year,
                class: class_name,
                category,
              }, // Use the correct property name
              index
            ) => (
              <div
                key={index}
                className="sm:grid sm:grid-cols-2 transition-all duration-300 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg sm:hover:scale-105 max-h- hover:bg-slate-50"
              >
                <div className="p-5 h-auto w-full">
                  {/* {category === "jee" && (
                    <img
                      className="object-cover rounded-lg h-full w-full mx-auto"
                      src="https://www.adarshbarnwal.com/wp-content/uploads/2022/03/Jee-Mains.jpg"
                      alt={class_name}
                    />
                  )}
                  {category === "neet" && (
                    <img
                      className="object-cover rounded-lg h-full w-full mx-auto"
                      src="https://www.vvtcoaching.com/neet/wp-content/uploads/2018/09/All-you-need-to-know-about-.jpg"
                      alt={class_name}
                    />
                  )}
                  {category === "foundation" && (
                    <img
                      className="sm:object-cover object-contain rounded-lg h-full w-full mx-auto"
                      src="https://www.thengpschool.ac.in/asset/frontend/images/about/accrediation/left-banner.jpg"
                      alt={class_name}
                    />
                  )} */}

                  {batch_name === "Foundation Batch 1"  && (
                    <img
                      className="object-cover rounded-lg h-full w-full mx-auto"
                      src={Foundation}
                      alt={class_name}
                    />
                  )}
                  {batch_name === "Foundation Batch 2"  && (
                    <img
                      className="object-cover rounded-lg h-full w-full mx-auto"
                      src={Foundation}
                      alt={class_name}
                    />
                  )}
                  {batch_name === "New Batch 1"  && (
                    <img
                      className="object-cover rounded-lg h-full w-full mx-auto"
                      src={New}
                      alt={class_name}
                    />
                  )}
                  {batch_name === "New Batch 2"  && (
                    <img
                      className="object-cover rounded-lg h-full w-full mx-auto"
                      src={New}
                      alt={class_name}
                    />
                  )}
                  {batch_name === "Udaan 3.0"  && (
                    <img
                      className="object-cover rounded-lg h-full w-full mx-auto"
                      src={Target}
                      alt={class_name}
                    />
                  )}
                  
                </div>
                <div className="grid px-7 pb-5 sm:px-5 sm:py-5">
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
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
                  <Link to="/courses">
                  
                  <a
                    href="#"
                    onClick={() =>
                      handleEnroll({
                        batch_name,
                        fee,
                        start_date,
                        target_year,
                        class_name,
                        category,
                      })
                    }
                    
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
                  </Link>
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
