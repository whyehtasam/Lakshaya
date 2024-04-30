import React from 'react'
import svg from '../../assets/AboutFeatureEdu.svg';
const AboutFeature = () => {
  return (
    <div>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex sm:p-10 md:flex-row flex-col items-center">
        
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center space-y-6">
          <h1 className="text-lg text-red-800 font-medium">Features</h1>
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold ">
          Tailored Learning Plans for Your Success
          </h1>
          <p className="mb-8 leading-relaxed text-slate-400 text-center">
          At our coaching service, we believe in providing personalized learning plans that cater to your unique needs. Our experienced team of educators will work closely with you to create a customized roadmap for your success.
          </p>
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mt-10 md:mt-0">
          <img
            className="object-cover object-center rounded-md"
            alt="hero"
            src={svg}
          />
        </div>
      </div>
    </section>
  </div>
  )
}

export default AboutFeature