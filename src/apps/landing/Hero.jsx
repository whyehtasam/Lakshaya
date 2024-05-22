import React from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import teachers from "../../assets/TeachersHero.jpg"


const Hero = () => {
  return (
    <div className="md:flex justify-between items-center">
      <div className="flex flex-col justify-start gap-3 sm:gap-6 my-7 md:w-[60vw]" >
        <h1 className="text-4xl font-bold text-red-800 md:text-5xl lg:text-7xl">
          The Lakshaya:
        </h1>
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-7xl">
          Guiding Minds,
        </h1>
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-7xl">
          Building Generations
        </h1>
        <div>
          <p className="mt-4 text-gray-600 sm:text-lg md:text-xl lg:text-2xl">
            JEE and NEET: A new paradigm in motivation and success direction.
          </p>
          <p className="mt-4 text-gray-600 sm:text-lg md:text-xl lg:text-2xl">
            JEE और NEET: नए प्रेरणा और सफलता की दिशा में एक नया मोड़।
          </p>
        </div>
        <div className="flex gap-5 mt-5 sm:mt-10">
          <PrimaryButton
            className="flex gap-2 font-semibold tracking-wider rounded-md sm:px-6 sm:py-3 sm:text-lg outline outline-2 outline-red-800 outline-offset-2 hover:bg-red-700"
            label="Enroll Now"
          />
          <SecondaryButton
            className="font-bold tracking-wider text-black bg-white rounded-md sm:px-6 sm:py-3 sm:text-lg outline outline-2 outline-red-800 outline-offset-2 hover:"
            label="Contact Us"
          />
        </div>
      </div>
      <div>
        <img src={teachers} alt="" className=" md:rounded-tl-[108px] md:rounded-br-[108px] md:rounded-tr-md md:rounded-bl-md rounded-md "/>
      </div>
    </div>
  );
};

export default Hero;
