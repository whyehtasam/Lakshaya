import { useState } from "react";
import { Link } from "react-router-dom";
Link;
const Header = () => {
  return (
    <>
      <section className="">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-lg text-red-800 font-medium">Empower</h1>
            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
              Unlock Your Potential
            </h2>
            <p>
              We are dedicated to providing quality education and empowering
              students to succeed.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="javascript:void(0)"
                className="block py-2 px-4 text-center text-white font-medium bg-red-800 duration-150 hover:bg-red-900 active:bg-red-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Learn more
              </a>
              <Link to='/contactUs'>
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex "
                >
                  Let's talk
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex-none mt-5 p-5  md:mt-0 md:max-w-xl">
            <img
              src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
              className=" md:rounded-tl-[108px] md:rounded-br-[108px] md:rounded-tr-md md:rounded-bl-md rounded-md "
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
