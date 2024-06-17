import React from "react";
import Header from "../../components/header/Header";

const features = [
  {
    title: "Audio-visual classroom",
    description:
      "Learn the concept in visual ways to have better graps on the topics.",
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
    title: "Practical Lab Classes",
    description:
      "Our coaching provides you the practical lab class so that you can test the practical application the very same concept.",
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
    title: "Extra doubt classes",
    description:
      "Your are always welcome in the extra doubts classes 'NEVER CARRY YOUR DOUBT FORWARD'.",
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
  {
    title: "Test series",
    description:
      "We provide the test series so that you can test your selves.",
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
  {
    title: "Special attention to the needy students",
    description:
      "We regularly track the performance of the students and give them special attention to needy one so that our all student can be on the same page.",
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
  {
    title: "Emphasis on the personality development",
    description:
      "We encourage our students to speak in the class even if they have a silly doubt , so that their personality can be developed.",
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
