import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/header/Navbar";
import Landing from "./apps/landing/Landing";
import Courses from "./apps/courses/Courses";
import ResidentialProgram from "./apps/residentialProgram/ResidentialProgram";
import FeePayment from "./apps/feePayment.jsx/FeePayment";
import Result from "./apps/results/Result";
import Resources from "./apps/resources/Resources";
import AboutUs from "./apps/aboutUs/AboutUs";
import Contact from "./apps/contactUs/Contact";
import SignUp from "./apps/signUp/SignUp";

import Footer from "./components/footer/FooterMain";
import Scholorship from "./apps/scholorship/Scholorship";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/residentialProgram" element={<ResidentialProgram />} /> */}
          <Route path="/residentialProgram" element={<Scholorship />} />
          <Route path="/feePayment" element={<FeePayment />} />
          <Route path="/results" element={<Result />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/" element={<Landing />} />
          <Route path="/scholarship" element={<Scholorship />} />

        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
