import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Input from "./components/input/Input";
import Navbar from "./components/header/Navbar";
import Landing from "./apps/landing/Landing";
// import Announcement from "./apps/courses/Courses";
// import ResidentialProgram from "./apps/residentialProgram/ResidentialProgram";
import FeePayment from "./apps/feePayment/FeePayment";
import Result from "./apps/results/Result";
import Resources from "./apps/resources/Resources";
import AboutUs from "./apps/aboutUs/AboutUs";
import Contact from "./apps/contactUs/Contact";
import SignUp from "./apps/signUp/SignUp";
import Courses from "./apps/courses/Courses";
import Footer from "./components/footer/FooterMain";
import Scholorship from "./apps/scholorship/Scholorship";
import Login from "./apps/logIn/Login";
import Gallery from "./apps/gallery/Gallery";
import Newsupdates from "./apps/newsupdates/Newsupdates";
import SignUpNew from "./apps/signUp/SignUpNew";
import BatchContextProvider from "./context/BatchContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  return (
    <BatchContextProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/residentialProgram" element={<ResidentialProgram />} /> */}
          {/* <Route path="/residentialProgram" element={<Scholorship />} /> */}

          <Route path="/courses" element={<Courses />} />

          <Route path="/feePayment" element={<FeePayment />} />
          <Route path="/results" element={<Result />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/aboutUs" element={<AboutUs />} />

          {/* <Route path="/contactUs" element={<Announcement />} /> */}

          <Route path="/contactUs" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<Landing />} />
          <Route path="/scholarship" element={<Scholorship />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/newsupdates" element={<Newsupdates />} />
        </Routes>

        <Footer />
      </Router>
    </BatchContextProvider>
  );
}

export default App;

