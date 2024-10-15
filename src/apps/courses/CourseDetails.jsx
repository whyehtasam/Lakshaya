import React, { useState, useEffect } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { neetA, foundation, jeeA, jeeB, neetB } from "./courseData";
import { ModalBox } from "../../components/wrappers/ModalBox";

const CourseDetails = () => {
  const [isActive, setIsActive] = useState(jeeA); // Initially set to jeeA
  const [isMobile, setIsMobile] = useState(false);
  const [courseData, setCourseData] = useState([]);

  const backend_url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    // if(!token) return;
    fetch(backend_url + "/api/course/get", {
      headers: {
        Authorization: `Bearer ${token}` ,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourseData([...data]);
        setIsActive([data[0]]);
      })
      .catch((e) => {
        console.log(e);
      });

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
      <h1 className="mx-auto text-4xl font-bold text-red-800 sm:p-5 md:text-5xl">
        Course Details
      </h1>

      <div className="flex flex-col gap-5 sm:flex-row">
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
                : "hidden  flex-col gap-2.5 sm:flex sm:flex-col sm:justify-start sm:gap-5 buttons w-full"
            }
          >
            {courseData === null ? (
              <p className="text-center text-red-800">
                No courses available. Please check again later.
              </p>
            ) : (
              courseData.map((e, index) => {
              return (
                <SecondaryButton
                  key={index}
                  onClick={() => setIsActive([e])}
                  className="text-sm font-bold tracking-wider text-black duration-200 border border-red-800 rounded-md sm:text-lg active:scale-95"
                  label={e.course_name}
                />
              );
            }))}
          </div>
        </div>

        <div className="flex flex-col flex-grow w-90">
          <div className="grid grid-cols-1 gap-5 sm:place-items-center">
            {isActive.map(({course_name,description,duration,syllabus,fee,startDate}, index) => (
              <div
                key={index}
                className="flex flex-col w-full transition-all duration-300 bg-white border border-gray-200 rounded-lg sm:flex-row dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg hover:bg-slate-50"
              >
                <div className="flex flex-col w-full p-5">
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    {course_name}
                  </h3>
                  <div className="flex mb-2">
                    <p className="flex mr-2 font-semibold text-gray-600 dark:text-white ">
                      Description:
                    </p>
                    <p className="w">{description}</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <p className="flex mr-2 font-semibold text-gray-600 dark:text-white">
                      Duration:
                    </p>
                    <p className="">{duration}</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <p className="mr-2 font-semibold text-gray-600 dark:text-white">
                      Batch Starts on: <strong>{startDate}</strong>
                    </p>
                  </div>
                  <div className="flex items-center mb-2">
                    <p className="mr-2 font-semibold text-gray-600 dark:text-white">
                      Fee:
                    </p>
                    <p>{fee}</p>
                  </div>
                  {/* <div className="flex items-center mb-2">
                    <p className="mr-2 font-semibold text-gray-600 dark:text-white">
                      
                      Year:
                    </p>
                    <p>{targetYear}</p>
                  </div> */}
                  <div className="flex w-full mb-2">
                    <p className="mr-2 font-semibold text-gray-600 dark:text-white">
                      Syllabus:
                    </p>
                    <pre className="w-full break-words whitespace-pre-wrap">
                      {}
                      <ModalBox syllabus={syllabus} filename={course_name}/>
                    </pre>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg w-fit hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                {/* {isMobile ? null : (
                  <div className="self-center ml-12 sm:w-40 sm:w-44">
                    <img
                      src={imgSrc}
                      alt={cours}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
