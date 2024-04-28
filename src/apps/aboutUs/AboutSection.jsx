import React from "react";

const AboutSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-md"
              alt="hero"
              src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center space-y-6">
            <h1 className="text-lg text-white font-medium">About Us</h1>
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-white">
              Long heading is what you see here
              in this feature section
            </h1>
            <p className="mb-8 leading-relaxed text-slate-100">
              Welcome to our platform, where we strive to provide top-notch
              services to our customers. We believe in the power of technology
              and its ability to simplify and enhance our lives. Our team is
              dedicated to offering innovative solutions that meet your needs
              and exceed your expectations. Join us on this journey to a more
              efficient and convenient digital experience.
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
