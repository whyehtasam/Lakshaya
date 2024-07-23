import ResultCard from "../../components/cards/ResultCard";
import Slider from "../../components/carousels/Slider";
import Header from "../../components/header/Header";
import BlobCircle from "../../components/wrappers/BlobCircle";
import Container from "../../components/wrappers/Container";
import Batch from "./Batch";
import Benefits from "./Benefits";
import FAQs from "./FAQs";
import FeatureList from "./FeatureList";
import Hero from "./Hero";
import Results from "./Results";
// import ScholorshipHero from "./ScholorshipHero";

import Teams from "./Teams";
import { ResultData } from "./data";

const Landing = () => {
  const chunks = [];
  for (let i = 0; i < ResultData.length; i += 3) {
    chunks.push(ResultData.slice(i, i + 3));
  }
  return (
    <div className="relative overflow-hidden">
      <Container className=" landing">
        <div className="absolute h-[70vh] sm:h-auto sm:w-8/12 -z-50 -right-72 -top-0 sm:-right-20 sm:-top-40  opacity-50 sm:opacity-80">
          <BlobCircle />
        </div>
        <Hero />
      </Container>
      <Container className="result pt-0 lg-pt-0">
        <div className="relative grid place-content-center">
          <Header
            title="Best Performance"
            header="Meet Our Top achievers"
            description="Best performance in the last academic year of the students of the The Lakshya."
            titleStyle="lg:text-xl"
            headerStyle="sm:text-5xl text-black"
            descStyle="sm:text-lg text-gray-700"
            className="pb-6 pt-4 text-center"
          />
        </div>

        <Slider className="hidden md:block h-[30rem] sm:h-96 ">
          {chunks.map((chunk, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-5">
              {chunk.map((student) => (
                <ResultCard key={student.name} student={student} />
              ))}
            </div>
          ))}
        </Slider>
        <Slider className="block md:hidden h-[30rem]  ">
          {ResultData.map((student) => (
            <ResultCard key={student.name} student={student} />
          ))}

        </Slider>
      </Container>
      <div className="bg-red-900">
        <Container>
          <Batch />
        </Container>
      </div>
      {/* <Container className=" landing relative">
        <div className="absolute h-[70vh] sm:h-auto sm:w-8/12 -z-50 -right-40 -top-0 sm:-right-20 sm:-top-40  opacity-50 sm:opacity-80">
          <BlobCircle />
        </div>
        <ScholorshipHero />
      </Container> */}
      <Container>
        <Benefits />
      </Container>
      <div className="bg-red-900">
        <Container>
          <FeatureList />
        </Container>
      </div>
      <Container>
        <Results />
      </Container>
      <Container>
        <Teams />
      </Container>
      <Container>
        <FAQs />
      </Container>
    </div>
  );
};

export default Landing;