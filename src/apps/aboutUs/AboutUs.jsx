import React from "react";
import Header from "./Header";
import Container from "../../components/wrappers/Container";
import AboutSection from "./AboutSection";

const AboutUs = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <div className="bg-red-900">
        <Container>
          <AboutSection/>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
