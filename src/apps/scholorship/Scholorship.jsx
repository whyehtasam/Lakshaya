import React from "react";
import Carousel from "../../components/carousels/Carousel";
import AccordionD from "../../components/accordion/AccordionD";
import ScholarshipDetails from "./ScholarshipDeatails";
import LastYearChamps from "./LastYearChamps";
import Container from "../../components/wrappers/Container";
import BlobCircle from "../../components/wrappers/BlobCircle";
import ScholarHero from "./ScholarHero";
import ScholarRegistration from "./ScholarRegistration";
import ScholorshipHero from "../landing/ScholorshipHero";

const Scholorship = () => {
  return (
    <div>
        <Container className=" landing">
          <div className="absolute h-[70vh] sm:h-auto sm:w-8/12 -z-50 -left-0 -top-0 sm:-right-20 sm:-top-40  opacity-50 sm:opacity-80">
            <BlobCircle />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-1 ">
            <div className="lg:col-span-2 md:col-span-1">
              <ScholarHero title="Lakshaya Coaching:" subtitle="All India Scholarship Test" burdenText="For Students in class 11th,12th & 13th" inspirationText="JEE and NEET: A new paradigm in motivation and success direction." inspirationText2="JEE और NEET: नए प्रेरणा और सफलता की दिशा में एक नया मोड़।"/>
            </div>
            <div>
              <ScholarRegistration />
            </div>
          </div>
        </Container>
              
          <ScholarshipDetails />



      <div className="relative overflow-hidden">
        <Container className=" landing">
          <div className="absolute h-[70vh] sm:h-auto sm:w-8/12 -z-50 -left-0 -top-0 sm:-right-20 sm:-top-40  opacity-50 sm:opacity-80">
            <BlobCircle />
          </div>
          <ScholorshipHero />
        </Container>
      </div>
      <Carousel />

      <AccordionD />

      <LastYearChamps />
    </div>
  );
};

export default Scholorship;
