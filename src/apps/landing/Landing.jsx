import BlobCircle from "../../components/wrappers/BlobCircle";
import Container from "../../components/wrappers/Container";
import Batch from "./Batch";
import Benefits from "./Benefits";
import FeatureList from "./FeatureList";
import Hero from "./Hero";
import Results from "./Results";
import ScholorshipHero from "./ScholorshipHero";

const Landing = () => {
  return (
    <div className="relative overflow-hidden">
      <Container className=" landing">
        <div className="absolute h-[70vh] sm:h-auto sm:w-8/12 -z-50 -right-40 -top-0 sm:-right-20 sm:-top-40  opacity-50 sm:opacity-80">
          <BlobCircle />
        </div>
        <Hero />
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
        <Benefits/>
      </Container>
      <Container>
        <FeatureList/>
      </Container>
      <Container>
        <Results/>
      </Container>

    </div>
  );
};

export default Landing;
