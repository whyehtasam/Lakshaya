import React from "react";
import Header from "../../components/header/Header";

const features = [
  {
    title: "Unlock Your Potential with Our Platform",
    description:
      "Access our extensive video content, interactive tests, and progress tracking to enhance your learning experience.",
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Interactive Learning at Your Fingertips",
    description:
      "Engage with our dynamic video lessons, practice with interactive tests, and track your progress in real-time.",
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
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    title: "Track Your Progress and Achieve Success",
    description:
      "Monitor your performance, identify areas of improvement, and stay motivated on your learning journey.",
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
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
      </svg>
    ),
  },
  // Add more features as needed
];

const FeatureList = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container  mx-auto">
        <Header
          title="Benefits"
          header="Expert-Led Flexible Learning"
          description="Explore our diverse course offerings, all led by expert instructors. Find your perfect educational fit with us."
          titleStyle="lg:text-xl"
          headerStyle="sm:text-5xl text-black"
          descStyle="sm:text-lg text-gray-700"
          className="pb-6 pt-4 text-center"
        />
        <div className="flex flex-wrap -m-4">
          {features.map((feature, index) => (
            <div key={index} className="p-4 md:w-1/3 ">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-md">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-800 text-white flex-shrink-0">
                    <feature.Icon />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    {feature.title}
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    {feature.description}
                  </p>
                  <a className="mt-3 text-red-800 inline-flex items-center">
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
                  </a>
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
