"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterMain = () => {
  return (
    <Footer container className="">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex pb-6 lg:p-0 ">
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
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-24">
            <div>
              <Footer.Title title="About Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Our coaching</Footer.Link>
                <Footer.Link href="#">Teachers</Footer.Link>
                <Footer.Link href="#">Batch 1</Footer.Link>
                <Footer.Link href="#">Batch 2</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="About Exam" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">JEE Mains</Footer.Link>
                <Footer.Link href="#">Jee Advance</Footer.Link>
                <Footer.Link href="#">Neet</Footer.Link>
                <Footer.Link href="#">Answer key & Solution</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Useful Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Fee Payment</Footer.Link>
                <Footer.Link href="#">Course 1</Footer.Link>
              
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact Us" className=""/>
              <Footer.LinkGroup col>
                <Footer.Link href="#"> Dhanbad - 110025
                 </Footer.Link>
                <Footer.Link href="#">+91-9874563210</Footer.Link>
                <Footer.Link href="#">+91-7845962114</Footer.Link>
               
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Lakshaya" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
           
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterMain;
