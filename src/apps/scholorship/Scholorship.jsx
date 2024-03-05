import React from "react";
import Carousel from "../../components/carousels/Carousel";
import AccordionD from "../../components/accordion/AccordionD";
import ScholarshipDetails from "./ScholarshipDeatails";
import LastYearChamps from "./LastYearChamps";
import Container from "../../components/wrappers/Container";

const Scholorship = () => {
  return (
    <div>
      <ScholarshipDetails/>
      <Carousel />

      <AccordionD />


      <LastYearChamps />
    </div>
  );
};

export default Scholorship;
