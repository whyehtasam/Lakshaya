import BlobCircle from "../../components/wrappers/BlobCircle";
import Container from "../../components/wrappers/Container";
import Hero from "./Hero";

const Landing = () => {
  return (
    <div className="relative overflow-hidden">
      <Container className=" landing">
        <div className="w-8/12 -z-50 absolute -right-20 -top-40">
          <BlobCircle />
        </div>
        <Hero />
      </Container>
    </div>
  );
};

export default Landing;
