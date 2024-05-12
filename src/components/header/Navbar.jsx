import React from "react";
import { Link } from "react-router-dom";
import  NavDrawer  from "./NavDrawer";

const Navbar = () => {
  return (
    <div>
      <div className="bg-white ">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          <header className="flex items-center justify-between py-4 md:py-6">
            <Link to="/">
              <a
                href="/"
                className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                aria-label="logo"
              >
                <svg
                  width="95"
                  height="94"
                  viewBox="0 0 95 94"
                  className="w-6 h-auto text-red-800"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg>
                Lakshaya
              </a>
            </Link>

            <nav className="hidden lg:gap-12 lg:flex">
              <ul className="hidden lg:gap-[4vw] lg:flex">
                <Link to="/courses">
                  <li className="text-sm font-semibold text-black transition duration-100 hover:text-red-800 ">
                    Courses
                  </li>
                </Link>
                <Link to="/newsupdates">
                  <li className="text-sm font-semibold text-black transition duration-100 hover:text-red-800 ">
                   Announcement
                  </li>
                </Link>
                <Link to="/feePayment">
                  <li className="text-sm font-semibold text-black transition duration-100 hover:text-red-800 ">
                    Fee Payment
                  </li>
                </Link>
               
                <Link to="/aboutUs">
                  <li className="text-sm font-semibold text-black transition duration-100 hover:text-red-800 ">
                    About Us
                  </li>
                </Link>
                <Link to="/gallery">
                  <li className="text-sm font-semibold text-black transition duration-100 hover:text-red-800 ">
                    Gallery 
                  </li>
                </Link>
              </ul>
            </nav>

            <ul className="lg:flex gap-2.5 font-semibold text-sm hidden ">
              <Link to="/contactUs">
                <li className="rounded-md border-2 ring-red-800 ring-2 hover:bg-red-700 text-white bg-red-800  py-2 px-4">
                  Contact Us
                </li>
              </Link>

              {/* <Link to="/signUp">
                {" "}
                <li className="py-2 px-4 rounded-md bg-red-800 text-white">
                  Sign Up
                </li>
              </Link> */}
            </ul>

            <span className="block md:hidden ">

            <NavDrawer/>
            </span>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
