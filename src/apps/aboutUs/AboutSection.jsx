import React from "react";
import svg from '../../assets/AboutUs.svg';
const AboutSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex sm:px-10 sm:py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-md"
              alt="hero"
              src={svg}     />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center space-y-6">
            <h1 className="text-lg text-red-200 font-medium">About Us</h1>
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-white">
              We Are The Team Lakshya.
            </h1>
            <p className="mb-8 leading-relaxed text-slate-100 text-center sm:text-justify">
            At The Lakshya, we treat every student like our own, fostering a nurturing environment where academic growth and personal development go hand in hand. Our expert teachers, each with over a decade of experience, are dedicated to providing top-notch education tailored to individual needs. They bring a wealth of practical knowledge and industry insights to the classroom, ensuring that students not only excel in their studies but also gain real-world skills.

            Our state-of-the-art facilities include well-stocked libraries and cutting-edge labs, designed to enhance learning and encourage hands-on experience. We believe that education extends beyond textbooks; our practical learning approach helps students apply their knowledge effectively, preparing them for future challenges.

            At The Lakshya, we are committed to supporting your academic journey and career aspirations, guiding you every step of the way to achieve your highest potential.
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
