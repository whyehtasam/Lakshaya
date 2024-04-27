import React, { useState, useEffect } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { neet24, foundation24, jee24, jee25, neet25 } from "./courseData";

const CourseDetails = () => {
  const [isActive, setIsActive] = useState(jee24); // Initially set to jee24
  const [isMobile, setIsMobile] = useState(false);

  const changehandler = (type) => {
    switch (type) {
      case "jee24":
        setIsActive(jee24);
        break;
      case "jee":
        setIsActive(jee25);
        break;
      case "neet":
        setIsActive(neet24);
        break;
        
      case "neet25":
        setIsActive(neet25);
        break;
      case "foundation":
        setIsActive(foundation24);
        break;
      default:
        setIsActive(jee24); // Default to jee24 if type is not recognized
        break;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="grid gap-5 sm:gap-12 sm:mb-4 batch-courses">
      <h1 className="sm:p-5 mx-auto text-4xl font-bold text-red-800 md:text-5xl ">
        Course Details
      </h1>

      <div className="flex flex-col sm:flex-row gap-5">
        {/* Left menu with buttons */}
        <div
          className={
            isMobile ? "flex justify-center gap-5 flex-col" : "flex gap-5"
          }
        >
          <div
            className={
              isMobile
                ? "flex gap-5 sm:hidden"
                : "hidden sm:flex flex-col gap-5 sm:flex sm:flex-col sm:justify-start sm:gap-10 buttons"
            }
          >
            <SecondaryButton
              onClick={() => changehandler("jee24")}
              className="text-sm font-bold tracking-wider text-black rounded-md sm:text-lg hover:bg-red-700 focus:bg-red-700 focus:text-white"
              label="JEE 24"
            />
            <SecondaryButton
              onClick={() => changehandler("jee")}
              className="text-sm font-bold tracking-wider text-black rounded-md sm:text-lg hover:bg-red-700 focus:bg-red-700 focus:text-white"
              label="JEE 25"
            />
            <SecondaryButton
              onClick={() => changehandler("neet")}
              className="text-sm font-bold tracking-wider text-black rounded-md sm:text-lg hover:bg-red-700 focus:bg-red-700 focus:text-white"
              label="NEET 24"
            />
            
            <SecondaryButton
              onClick={() => changehandler("neet")}
              className="text-sm font-bold tracking-wider text-black rounded-md sm:text-lg hover:bg-red-700 focus:bg-red-700 focus:text-white"
              label="NEET 25"
            />
            <SecondaryButton
              onClick={() => changehandler("foundation")}
              className="text-sm font-bold tracking-wider text-black rounded-md sm:text-lg hover:bg-red-700 focus:bg-red-700 focus:text-white"
              label="Boards 25"
            />
          </div>
        </div>
        {/* Main content with single card */}
        <div className="flex flex-col flex-grow">
          <div className="grid grid-cols-1 gap-5 sm:place-items-center">
            {isActive.map((batch, index) => (
              <div
                key={index}
                className="w-full flex flex-col sm:flex-row transition-all duration-300 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg sm:hover:scale-105 hover:bg-slate-50"
              >
                <div className="p-5 sm:w-1/2">
                  <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                    {batch.name}
                  </h3>
                  <div className="mb-2">
                    <p className="font-semibold text-gray-600 dark:text-white">
                      Feature 1:
                    </p>
                    {/* Add feature 1 details here */}
                  </div>
                  <div className="mb-2">
                    <p className="font-semibold text-gray-600 dark:text-white">
                      Fee:
                    </p>
                    <p>{batch.price}</p>
                  </div>
                  <div className="mb-2">
                    <p className="font-semibold text-gray-600 dark:text-white">
                      Year:
                    </p>
                    <p>{batch.targetYear}</p>
                  </div>
                  <div className="mb-2">
                    <p className="font-semibold text-gray-600 dark:text-white">
                      Faculties:
                    </p>
                    <p>{batch.faculties.join(", ")}</p>{" "} 
                    {/* array for faculty */}
                  </div>
                  <div>
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
                <div className="sm:w-1/2">
                  <img
                    src={batch.imgSrc}
                    alt={batch.name}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
