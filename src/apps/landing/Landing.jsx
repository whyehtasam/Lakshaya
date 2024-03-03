import BlobCircle from "../../components/wrappers/BlobCircle";
import Container from "../../components/wrappers/Container";
import Hero from "./Hero";

const Landing = () => {
  return (
    <div className="relative overflow-hidden">
      <Container className=" landing">
        <div className="absolute h-[70vh] sm:w-8/12 -z-50 -right-40 -top-0 sm:-right-20 sm:-top-40  opacity-50 sm:opacity-80">
          <BlobCircle />
        </div>
        <Hero />
      </Container>
    </div>
  );
};

export default Landing;
