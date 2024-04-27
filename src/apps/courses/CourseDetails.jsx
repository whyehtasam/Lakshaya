import React, { useState, useEffect } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { neetA, foundation, jeeA, jeeB, neetB } from "./courseData";

const CourseDetails = () => {
  const [isActive, setIsActive] = useState(jeeA); // Initially set to jeeA
  const [isMobile, setIsMobile] = useState(false);

  const changehandler = (type) => {
    switch (type) {
      case "jeeA":
        setIsActive(jeeA);
        break;
      case "jeeB":
        setIsActive(jeeB);
        break;
      case "neetA":
        setIsActive(neetA);
        break;
      case "neetB":
        setIsActive(neetB);
        break;
      case "foundation":
        setIsActive(foundation);
        break;
      default:
        setIsActive(jeeA); // Default to jeeA if type is not recognized
        break;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="grid gap-5 sm:gap-12 sm:mb-4 batch-courses">
      <h1 className="sm:p-5 mx-auto text-4xl font-bold text-red-800 md:text-5xl">
        Course Details
      </h1>

      <div className="flex flex-col sm:flex-row gap-5">
        {/* Left menu with buttons */}
        <div
          className={
            isMobile
              ? "flex justify-center gap-2.5 flex-col w-full" 
              : "flex gap-2.5 w-64"
          }
        >
          <div
            className={
              isMobile
                ? "flex gap-2.5 sm:hidden flex-wrap"
                : "hidden sm:flex flex-col gap-2.5 sm:flex sm:flex-col sm:justify-start sm:gap-5 buttons w-full"
            }
          >
            <SecondaryButton
              onClick={() => changehandler("jeeA")}
              className="text-sm font-bold tracking-wider text-black rounded-md sm:text-lg hover:bg-red-700 focus:bg-red-700 focus:text-white border border-red-800"
              label="JEE 24"
            />
            <SecondaryButton
              onClick={() => changehandler("jeeB")}
              className="text-sm font-bold tracking-wider text-black rounded-md sm:text-lg hover:bg-red-700 focus:bg-red-700 focus:text-white border border-red-800"
              label="JEE 25"
            />
            <SecondaryButton
              onClick={() => changehandler("neetA")}
              className="text-sm font-bold tracking-wider text-black rounded-md sm:text-lg hover:bg-red-700 focus:bg-red-700 focus:text-white border border-red-800"
              label="NEET 24"
            />
            <SecondaryButton
              onClick={() => changehandler("neetB")}
              className="text-sm font-bold tracking-wider text-black rounded-md sm:text-lg hover:bg-red-700 focus:bg-red-700 focus:text-white border border-red-800"
              label="NEET 25"
            />
            <SecondaryButton
              onClick={() => changehandler("foundation")}
              className="text-sm font-bold tracking-wider text-black rounded-md sm:text-lg hover:bg-red-700 focus:bg-red-700 focus:text-white border border-red-800"
              label="Boards 25"
            />
          </div>
        </div>
        {/* Main content with single card */}
        <div className="flex flex-col flex-grow w-90">
          <div className="grid grid-cols-1 gap-5 sm:place-items-center">
            {isActive.map((batch, index) => (
              <div
                key={index}
                className="w-full flex flex-col sm:flex-row transition-all duration-300 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg sm:hover:scale-105 hover:bg-slate-50"
              >
                <div className="p-5 sm:w-3/4 flex flex-col">
                  <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                    {batch.name}
                  </h3>
                  <div className="mb-2 flex items-center">
                    <p className="font-semibold text-gray-600 dark:text-white mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a.65.65 0 01-.38-.13l-7-5A.65.65 0 012 12V7c0-.A.13-.47.34-.6L10 2l7.66 4.4c.2.12.34.35.34.6v5c0 .A-.14.47-.34.6l-7 5a.65.65 0 01-.28.06zM3 7.72V12l6.3-3.62a.6.6 0 01.4 0L17 12V7.72l-7-4-7 4zM10 4.5L16 8v1l-6-3.46L4 9V8l6-3.5zM5 14v1h10v-1H5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Feature 1:
                    </p>
                  </div>
                  <div className="mb-2 flex items-center">
                    <p className="font-semibold text-gray-600 dark:text-white mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a.65.65 0 01-.38-.13l-7-5A.65.65 0 012 12V7c0-.A.13-.47.34-.6L10 2l7.66 4.4c.2.12.34.35.34.6v5c0 .A-.14.47-.34.6l-7 5a.65.65 0 01-.28.06zM3 7.72V12l6.3-3.62a.6.6 0 01.4 0L17 12V7.72l-7-4-7 4zM10 4.5L16 8v1l-6-3.46L4 9V8l6-3.5zM5 14v1h10v-1H5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Feature 2:
                    </p>
                  </div>
                  <div className="mb-2 flex items-center">
                    <p className="font-semibold text-gray-600 dark:text-white mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a.65.65 0 01-.38-.13l-7-5A.65.65 0 012 12V7c0-.A.13-.47.34-.6L10 2l7.66 4.4c.2.12.34.35.34.6v5c0 .A-.14.47-.34.6l-7 5a.65.65 0 01-.28.06zM3 7.72V12l6.3-3.62a.6.6 0 01.4 0L17 12V7.72l-7-4-7 4zM10 4.5L16 8v1l-6-3.46L4 9V8l6-3.5zM5 14v1h10v-1H5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Batch Starts on: <strong>{batch.startDate}</strong>
                    </p>
                  </div>
                  <div className="mb-2 flex items-center">
                    <p className="font-semibold text-gray-600 dark:text-white mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a.65.65 0 01-.38-.13l-7-5A.65.65 0 012 12V7c0-.A.13-.47.34-.6L10 2l7.66 4.4c.2.12.34.35.34.6v5c0 .A-.14.47-.34.6l-7 5a.65.65 0 01-.28.06zM3 7.72V12l6.3-3.62a.6.6 0 01.4 0L17 12V7.72l-7-4-7 4zM10 4.5L16 8v1l-6-3.46L4 9V8l6-3.5zM5 14v1h10v-1H5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Fee:
                    </p>
                    <p>{batch.price}</p>
                  </div>
                  <div className="mb-2 flex items-center">
                    <p className="font-semibold text-gray-600 dark:text-white mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a.65.65 0 01-.38-.13l-7-5A.65.65 0 012 12V7c0-.A.13-.47.34-.6L10 2l7.66 4.4c.2.12.34.35.34.6v5c0 .A-.14.47-.34.6l-7 5a.65.65 0 01-.28.06zM3 7.72V12l6.3-3.62a.6.6 0 01.4 0L17 12V7.72l-7-4-7 4zM10 4.5L16 8v1l-6-3.46L4 9V8l6-3.5zM5 14v1h10v-1H5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Year:
                    </p>
                    <p>{batch.targetYear}</p>
                  </div>
                  <div className="mb-2 flex items-center">
                    <p className="font-semibold text-gray-600 dark:text-white mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a.65.65 0 01-.38-.13l-7-5A.65.65 0 012 12V7c0-.A.13-.47.34-.6L10 2l7.66 4.4c.2.12.34.35.34.6v5c0 .A-.14.47-.34.6l-7 5a.65.65 0 01-.28.06zM3 7.72V12l6.3-3.62a.6.6 0 01.4 0L17 12V7.72l-7-4-7 4zM10 4.5L16 8v1l-6-3.46L4 9V8l6-3.5zM5 14v1h10v-1H5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Faculties:
                    </p>
                    <p>{batch.faculties.join(", ")}</p>{" "}
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
                {isMobile ? null : (
                  <div className="sm:w-40 sm:w-44 self-center ml-12">
                    <img
                      src={batch.imgSrc}
                      alt={batch.name}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
