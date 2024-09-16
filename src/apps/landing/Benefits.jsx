import { useState } from "react";
import Header from "../../components/header/Header";
import svg from '../../assets/benefits.svg'

const Benefits = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <section className="Benefits grid sm:grid-cols-2 grid-cols-1 gap-10 sm:gap-0  sm:pb-8 ">
      
      <div className="relative grid place-content-center">
        <Header
          title="Benefits"
          header="Flexible Learning with Expert Instructors"
          description="Our coaching The Lakshya we offers flexible learning options and is led by expert instructors. With a wide range of courses to choose from, you can easily find the perfect fit for your educational needs."
          titleStyle="lg:text-xl"
          headerStyle="sm:text-7xl text-black "
          descStyle="text-justify sm:text-lg text-gray-700"
          className="pb-6 pt-4 space-y-"
        />
        
      </div>
      <div className=" sm:px-10 sm:pt-10">
        <div className="w-full h-full  rounded-lg  ">
          
                <img
                  
                  src={svg}
                  alt=""
                  className="aspect-[4/3] object-cover h-full   hover:scale-105 duration-500 transition-all cursor-pointer"
                />
           
        </div>
      </div>
    </section>
  );
};

export default Benefits;