import React from "react";
import Carousel from "../../components/carousels/Carousel";
import AccordionD from "../../components/accordion/AccordionD";
import ScholarshipDetails from "./ScholarshipDeatails";
import LastYearChamps from "./LastYearChamps";
import Container from "../../components/wrappers/Container";
import BlobCircle from "../../components/wrappers/BlobCircle";
import ScholarHero from "./ScholarHero";

const Scholorship = () => {
  return (
    <div>
      <ScholarshipDetails />

      <div className="relative overflow-hidden">
        <Container className=" landing">
          <div className="absolute h-[70vh] sm:h-auto sm:w-8/12 -z-50 -left-0 -top-0 sm:-right-20 sm:-top-40  opacity-50 sm:opacity-80">
            <BlobCircle />
          </div>
          <ScholarHero />
        </Container>
      </div>
      <Carousel />

      <AccordionD />

      <LastYearChamps />
    </div>
  );
};

export default Scholorship;
