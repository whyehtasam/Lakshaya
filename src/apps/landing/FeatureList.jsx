import React from "react";
import Header from "../../components/header/Header";

const features = [
  {
    title: "Audio-visual classroom",
    description:
      "Learn concepts visually for better understanding and retention.",
    Icon: () => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M23 7V17C23 18.1046 22.1046 19 21 19H3C1.89543 19 1 18.1046 1 17V7C1 5.89543 1.89543 5 3 5H21C22.1046 5 23 5.89543 23 7Z" />
        <path d="M1 7L12 13L23 7" />
      </svg>
    ),
  },
  {
    title: "Practical Lab Classes",
    description:
      "Experience hands-on learning with practical lab sessions.",
    Icon: () => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M9 2L15 2L15 8L9 8L9 2Z" />
        <path d="M3 8L21 8L21 22L3 22L3 8Z" />
        <path d="M9 8L9 22" />
        <path d="M15 8L15 22" />
      </svg>
    ),
  },
  {
    title: "Extra doubt classes",
    description:
      "Attend extra classes to clear all your doubts effectively.",
    Icon: () => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 19C10.34 19 9 17.66 9 16C9 14.34 10.34 13 12 13C13.66 13 15 14.34 15 16C15 17.66 13.66 19 12 19ZM12 11C10.9 11 10 10.1 10 9C10 7.9 10.9 7 12 7C13.1 7 14 7.9 14 9C14 10.1 13.1 11 12 11Z" />
      </svg>
    ),
  },
  {
    title: "Test series",
    description:
      "Evaluate your knowledge with our comprehensive test series.",
    Icon: () => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
      </svg>
    ),
  },
  {
    title: "Special attention to students",
    description:
      "Receive personalized attention to ensure your success.",
    Icon: () => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 19C10.34 19 9 17.66 9 16C9 14.34 10.34 13 12 13C13.66 13 15 14.34 15 16C15 17.66 13.66 19 12 19ZM12 11C10.9 11 10 10.1 10 9C10 7.9 10.9 7 12 7C13.1 7 14 7.9 14 9C14 10.1 13.1 11 12 11Z" />
      </svg>
    ),
  },
  {
    title: "Personality development",
    description:
      "Develop your personality through active class participation.",
    Icon: () => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 19C10.34 19 9 17.66 9 16C9 14.34 10.34 13 12 13C13.66 13 15 14.34 15 16C15 17.66 13.66 19 12 19ZM12 11C10.9 11 10 10.1 10 9C10 7.9 10.9 7 12 7C13.1 7 14 7.9 14 9C14 10.1 13.1 11 12 11Z" />
      </svg>
    ),
  },
  // Add more features as needed
];

const FeatureList = () => {
  return (
    <section className="text-gray-600 body-font pb-8">
      <div className="container  mx-auto">
        <Header
          title="Features"
          header="Expert-Led Learning Method"
          description="Explore our diverse course offerings, all led by expert instructors. Find your perfect educational fit with us."
          titleStyle="lg:text-xl text-slate-300"
          headerStyle="sm:text-5xl text-white"
          descStyle="sm:text-lg text-slate-100"
          className="pb-6 pt-4 text-center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
          {features.map((feature, index) => (
            <div key={index} className=" ">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-md">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-800 text-white flex-shrink-0">
                    <feature.Icon />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    {feature.title}
                  </h2>
                </div>
                <div className="grid h-full justify-between">
                  <p className="leading-relaxed text-base">
                    {feature.description}
                  </p>
                  {/* <a className="mt-3 text-red-800 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureList;