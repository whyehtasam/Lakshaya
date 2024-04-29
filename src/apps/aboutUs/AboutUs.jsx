import React from "react";
import Header from "./Header";
import Container from "../../components/wrappers/Container";
import AboutSection from "./AboutSection";
import AboutFeature from "./AboutFeature";
import AboutServices from "./AboutServices";
import Teams from "../../apps/landing/Teams";
import { Testimonials } from "./Testimonials";
const AboutUs = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <div className="bg-red-900">
        <Container>
          <AboutSection />
        </Container>
      </div>
      <Container>
        <AboutFeature />
      </Container>
      <div className="bg-red-900">
        <Container>
          <AboutServices/>
        </Container>
      </div>
      <Container>
        <Teams/>
      </Container>
      {/* <Container> */}
        <Testimonials/>
      {/* </Container> */}
    </>
  );
};

export default AboutUs;
