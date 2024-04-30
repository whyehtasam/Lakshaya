import React from "react";
import svg from "../../assets/Service.svg";
const AboutServices = () => {
  return (
    <div>
      <section className="text-gray-600 body-font sm:py-6">
        <div  className="px-5 sm:mb-16 mb-10 text-center space-y-3">

        <h1 className="text-lg text-red-200 font-medium">Explore</h1>
        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-white">
          The Services We Offer
        </h1>
        </div> 
        <div className="container sm:px-5  mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden bg-slate-50  p-10">
            <img
              alt="feature"
              className="object-cover object-center h-full sm:mx-auto w-full"
              src={svg}
            />
          </div>
          <div className="flex flex-col flex-wrap  -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center bg-slate-100 p-5 rounded-md">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Expert Tutoring Services
                </h2>
                <p className="leading-relaxed text-base">
                  We offer a range of services including one-on-one tutoring,
                  group classes, and test preparation. Our experienced tutors
                  are dedicated to helping students achieve their academic
                  goals.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center  bg-slate-100 p-5 rounded-md">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Personalized Learning Approach
                </h2>
                <p className="leading-relaxed text-base">
                  At our coaching center, we believe in a personalized learning
                  approach. Our team of educators tailor their teaching methods
                  to meet the unique needs and learning styles of each student.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center  bg-slate-100 p-5 rounded-md">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Comprehensive Test Preparation
                </h2>
                <p className="leading-relaxed text-base">
                  Preparing for exams can be challenging, but our test
                  preparation services are designed to help students excel. We
                  provide comprehensive study materials, practice tests, and
                  expert guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutServices;
