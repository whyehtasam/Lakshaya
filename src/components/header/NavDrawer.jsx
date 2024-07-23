"use client";

import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const links = [
    { path: "/", name: "Home" },
    { path: "/aboutUs", name: "About Us" },
    { path: "/courses", name: "Courses" },
    { path: "/newsupdates", name: "Announcement" },
    { path: "/feePayment", name: "Fee Payment" },
    { path: "/gallery", name: "Gallery" },
    // { path: "/contactUs", name: "Contact Us", isContact: true },
  ];

  return (
    <>
      <div className="">
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-600 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-sm lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>
      </div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="w-64"
      >
        <Drawer.Header title="Lakshay Academy " />
        <Drawer.Items>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {links.map((link,index) => (
              <Link to={link.path} key={index}>
                <button
                  onClick={handleClose}
                  className={`w-full px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 ${
                    link.isContact
                      ? "rounded-md border-2 ring-red-800 ring-2 hover:bg-red-700 text-white bg-red-800 py-2 px-4"
                      : ""
                  }`}
                >
                  {link.name}
                </button>
              </Link>
            ))}

            <Link to="/contactUs">
              <button
                onClick={handleClose}
                href="#"
                className="w-full flex justify-center items-center px-4 py-2 text-sm font-medium text-center rounded-lg border-2 ring-red-800 ring-2 hover:bg-red-700 text-white bg-red-800  
            "
              >
                Contact Us&nbsp;
                <svg
                  className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default NavDrawer;
