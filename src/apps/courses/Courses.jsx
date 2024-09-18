import React from "react";
import CourseHero from "./CourseHero";
import Register from "./Register";
import LastYearChamps from "./LastYearChamps";
import Container from "../../components/wrappers/Container";
import BlobCircle from "../../components/wrappers/BlobCircle";
import Batch from "./Batch";
import CourseDetails from "./CourseDetails";
import Carousel from "../../components/carousels/Carousel";
import { Testimonials } from "../aboutUs/Testimonials";

const Courses = () => {
  return (
    <>
      <div>
        <Container className=" landing">
          <div className="absolute h-[70vh] sm:h-auto sm:w-8/12 -z-50 -left-0 -top-0 sm:-right-20 sm:-top-40  opacity-50 sm:opacity-80">
            <BlobCircle />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-1 ">
            <div className="lg:col-span-2 md:col-span-1">
              <CourseHero
                title="The Lakshya:"
                subtitle="Forum for IIT-JEE & MEDICAL"
                burdenText="For Students in class 11th,12th & Foundation(5th-10th)"
                inspirationText="JEE and NEET: A new paradigm in motivation and success direction."
                inspirationText2="JEE और NEET: नए प्रेरणा और सफलता की दिशा में एक नया मोड़।"
              />
            </div>
            <div>
              <Register />
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-red-900">
        <Container>
          <Batch />
        </Container>
      </div>
      <div>
        <Container>
          <CourseDetails />
        </Container>
      </div>

      <div>
        {/* <Carousel /> */}
        <Testimonials />
      </div>
      
    </>
  );
};

export default Courses;
