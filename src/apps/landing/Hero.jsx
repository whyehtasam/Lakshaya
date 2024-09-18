import React from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import teachers from "../../assets/TeachersHero.jpg";
import target from "../../assets/target.gif";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="items-center justify-between md:flex">
      <div className="flex flex-col justify-start gap-3 sm:gap-6 my-7 md:w-[60vw]">
        <h1 className="text-4xl font-bold text-red-800 md:text-5xl lg:text-7xl">
          The Lakshya:
        </h1>
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
          Forum for IIT-JEE &
        </h1>
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
          NEET-UG Medical
        </h1>
        <h3 className="text-2xl font-bold text-gray-800 md:text-3xl lg:text-3xl">
          11th,12th & Foundation(5<sup>th</sup>-10<sup>th</sup>)
        </h3>
        {/* <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-7xl">
          Building Generations
        </h1> */}
        <div>
          {/* <p className="mt-4 text-gray-600 sm:text-lg md:text-xl lg:text-2xl">
            JEE and NEET: A new paradigm in motivation and success direction.
          </p> */}
          <p className="mt-4 text-gray-600 sm:text-lg md:text-xl lg:text-2xl">
            JEE और NEET: नए प्रेरणा और सफलता की दिशा में एक नया मोड़।
          </p>
          <p className="flex items-center mt-4 text-gray-600 sm:text-lg md:text-xl lg:text-2xl">
            Lakshya की प्राप्ति {"  "}
            <span>
              <img src={target} className="w-10 ml-1" alt="target img" />
            </span>{" "}
            <span className="mx-1 font-medium text-red-800 animate-pulse">
              The Lakshya
            </span>{" "}
            <span className="mt-1 ml-1">के साथ।</span>
          </p>
        </div>
        <div className="flex gap-5 mt-5 sm:mt-5">
          <Link to="/courses">
            <PrimaryButton
              className="flex gap-2 font-semibold tracking-wider rounded-md sm:px-6 sm:py-3 sm:text-lg outline outline-2 outline-red-800 outline-offset-2 hover:bg-red-700 "
              label="Enroll Now"
            />{" "}
          </Link>
          <Link to="/contactUs">
            <SecondaryButton
              className="font-bold tracking-wider text-black bg-white rounded-md sm:px-6 sm:py-3 sm:text-lg outline outline-2 outline-red-800 outline-offset-2 hover:"
              label="Contact Us"
            />
          </Link>
        </div>
      </div>
      <div>
        <img
          src={teachers}
          alt=""
          className=" md:rounded-tl-[108px] md:rounded-br-[108px] md:rounded-tr-md md:rounded-bl-md rounded-md "
        />
      </div>
    </div>
  );
};

export default Hero;
