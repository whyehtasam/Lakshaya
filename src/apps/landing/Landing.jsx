import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultCard from "../../components/cards/ResultCard";
import Slider from "../../components/carousels/Slider";
import Header from "../../components/header/Header";
import BlobCircle from "../../components/wrappers/BlobCircle";
import Container from "../../components/wrappers/Container";
import Batch from "../courses/Batch";
import Benefits from "./Benefits";
import FAQs from "./FAQs";
import FeatureList from "./FeatureList";
import Hero from "./Hero";
import Results from "./Results";
import Teams from "./Teams";
import SkeletonResult from "./SkeletonResult";

const Landing = () => {
  const [results, setResults] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`${backend_url}/api/result/get`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setResults(response.data.reverse()); // Reverse the order to show latest first
      } catch (error) {
        console.error("Error fetching results", error);
      }
    };

    fetchResults();
  }, [backend_url, token]);

  const chunks = [];
  for (let i = 0; i < results.length; i += 3) {
    chunks.push(results.slice(i, i + 3));
  }
  useEffect(() => {
    // Set a delay of 2-3 seconds (here 2 seconds)
    const timer = setTimeout(() => {
      setShowSkeleton(false); // Hide the skeleton and show the results after 2 seconds
    }, 2000);

    // Clear the timeout if the component is unmounted to prevent memory leaks
    return () => clearTimeout(timer);
  }, []); // Only run once on component mount
  return (
    <div className="relative overflow-hidden">
      <Container className="landing">
        <div className="absolute h-[70vh] sm:h-auto sm:w-8/12 -z-50 -right-[20rem] -top-0 sm:-right-20 sm:-top-40 opacity-50 sm:opacity-80">
          <BlobCircle />
        </div>
        <Hero />
      </Container>
      <Container className="result pt-0 lg-pt-0">
        <div className="relative grid place-content-center">
          <Header
            title="Best Performance"
            header="Meet Our Top achievers"
            description="Best performance in the past academic year of the students of The Lakshya."
            titleStyle="lg:text-xl"
            headerStyle="sm:text-5xl text-black"
            descStyle="sm:text-lg text-gray-700"
            className="pb-6 pt-4 text-center"
          />
        </div>
        <Slider className="hidden md:block h-[30rem] sm:h-96">
          {chunks.map((chunk, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-5">
              {chunk.map((student, studentIndex) => (
                <div key={studentIndex}>
                  {/* Show Skeleton for 2-3 seconds, then show the ResultCard */}
                  {showSkeleton ? (
                    <SkeletonResult />
                  ) : (
                    <ResultCard key={student.name} student={student} />
                  )}
                </div>
              ))}
            </div>
          ))}
        </Slider>
        <Slider className="block md:hidden ">
          {results.map((student) => (
            <ResultCard key={student.name} student={student} />
          ))}
        </Slider>
      </Container>
      <div className="bg-red-900">
        <Container>
          <Batch />
        </Container>
      </div>
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
