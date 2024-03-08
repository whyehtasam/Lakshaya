import React from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";

const ScholorshipHero = () => {
  return (
    <div>
      <div className="flex flex-col justify-start gap-3 sm:gap-5 my-7">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
          <span className="text-red-800">L</span>
          <span className="text-orange-400">akshaya</span>{" "}
          <span className="text-red-800">S</span>
          <span className="text-stone-400">cholorship</span>{" "}
          <span className="text-red-800">T</span>
          <span className="text-green-500">est</span>:
        </h1>
        <h1 className="text-4xl font-bold text-orange-400 md:text-5xl lg:text-7xl">
          They say,
        </h1>
        <h1 className="text-4xl font-bold text-green-500 md:text-5xl lg:text-7xl">
          "With Great
        </h1>
        <h1 className="text-4xl font-bold text-green-500 md:text-5xl lg:text-7xl">
          Journey comes great
        </h1>
        <h1 className="text-4xl font-bold text-green-500 md:text-5xl lg:text-7xl">
          Responsibility"
        </h1>
        <div>
          <p className="mt-4 font-bold text-gray-700 sm:text-lg md:text-xl lg:text-3xl">
            Here we are to help you lighten your burder
          </p>
        </div>
        <div className="grid gap-5 mt-5 sm:flex sm:mt-10">
          <SecondaryButton
            className="w-full sm:w-fit font-bold tracking-wider text-black bg-white rounded-md sm:px-6 sm:py-3 sm:text-lg outline outline-2 outline-red-800 outline-offset-2 hover"
            label="Scholorship Registration"
          />
          <PrimaryButton
            className=" w-full sm:w-fit gap-2 font-semibold tracking-wider text-center rounded-md sm:px-6 sm:py-3 sm:text-lg outline outline-2 outline-red-800 outline-offset-2 hover:bg-red-700"
            label="Check Eligibility"
          />
        </div>
      </div>
    </div>
  );
};

export default ScholorshipHero;
