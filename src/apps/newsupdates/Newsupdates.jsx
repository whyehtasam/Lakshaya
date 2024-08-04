import React, { useState } from "react";
import Container from "../../components/wrappers/Container";
import LastYearChamp from "../scholorship/LastYearChamps";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Pagination from "../../components/pagination/Pagination";
import Header from "../../components/header/Header";
import { useEffect } from "react";

const Newsupdates = () => {
  const [announcement, setAnnouncement] = useState([]);
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  useEffect(function () {
    const token = localStorage.getItem("token");
    // if (!token) return;
    fetch(backend_url + "/api/announcement/get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAnnouncement(data);
        console.log("Announcement", data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      {/* <h1 className="pb-4 text-4xl font-bold text-center text-red-800 md:text-5xl lg:text-7xl">
        Latest News & Updates
      </h1> */}
      <div className="relative grid p-5 place-content-center">
        <Header
          title="Announcements"
          header="Latest News & Updates"
          description="Stay in the loop with our announcement page! Get the latest updates, news, and important information"
          titleStyle="lg:text-xl text-center"
          headerStyle="sm:text-5xl text-black text-center "
          descStyle="text-justify sm:text-lg text-gray-700 text-center"
          className="pt-4 pb-6 space-y-"
        />
      </div>

      {/* <hr className="w-[80%] h-1 mx-auto my-4 bg-gray-100 border-0 rounded  dark:bg-gray-700"></hr> */}

      <div className="grid gap-4 p-5 lg:grid-cols-5 sm:grid-cols-1 ">
        <div className="sticky flex-none p-6 rounded-md shadow  bg-white">
          <h1 className="text-3xl font-bold text-gray-800 md:text-5xl lg:text-4xl ">
            Filter By
          </h1>
          <div className="pt-6">
            <label
              htmlFor="Month"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Month
            </label>
            <select
              id="Month"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select Month</option>
              <option selected value="1">
                Janaury
              </option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>

          <div className="pt-2 pb-6">
            <label
              htmlFor="moving Class"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Year
            </label>
            <select
              id="moving Class"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select Year</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option selected value="2024">
                2024
              </option>
            </select>
          </div>

          <PrimaryButton
            className="w-full gap-2 font-semibold tracking-wider text-center rounded-md  sm:w-fit lg:py-2 sm:px-6 sm:py-3 sm:text-lg outline outline-2 outline-red-800 outline-offset-2 hover:bg-red-700"
            label="Apply"
          />
        </div>

        <div className="p-6 rounded-md shadow grow lg:col-span-4">
          {announcement.map(({ title, description }, index) => {
            return (
              <div
                key={index}
                className="grid content-center gap-2 p-5 mb-2 rounded-md shadow hover:shadow-md bg-white"
              >
                <div className="grid content-center ">
                  <h1 className="text-2xl font-bold text-red-800">{title}</h1>
                </div>

                <div className="grid content-center ">
                  {/* <a href="#" className="text-lg font-semibold text-red-800">
                    Download
                  </a> */}
                  <div className=" text-grey-900">{description}</div>
                </div>
              </div>
            );
          })}

          <Pagination />
        </div>
      </div>
      <div>{/* <LastYearChamp /> */}</div>
    </div>
  );
  1;
};

export default Newsupdates;
