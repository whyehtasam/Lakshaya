import Container from "../../components/wrappers/Container";

import gradicon from "../../assets/graduation-64.png";
import testicon from "../../assets/test-results-50.png";

function scholarshipDetails() {
  return (
    <>
      <div className="bg-pink-800">
        <Container>
          <h1 className="text-center text-[#fff] text-4xl pt-4 font-bold uppercase">
            Lakshaya open scholarship test
          </h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 max-w-[1200px] mx-auto mt-3">

            <div className="m-auto mt-3 bg-[#fff]  lg:p-12  rounded-md w-[100%] p-2">
              <div className="p-2 m-2  text-center rounded-md bg-[#F6E9EE] lg:space-x-8 sm:space-x-1">
                <img className="inline w-[40px]" src={gradicon} alt="" />
                <h2 className=" inline  text-2xl align-middle">Scholarship Details</h2>
              </div>
              <p className="mx-3 p-3 ">
                Give the test at a date and time of your choice. <br />Timings :
                Anytime | Duration : 1 Hr <br /> Mode : Online (From Anywhere)
              </p>
            </div>

            <div className="m-auto mt-3 bg-[#fff] lg:p-12   rounded-md w-[100%] p-2">
              <div className="p-2 m-2  text-center rounded-md bg-[#F6E9EE] lg:space-x-8">
                <img className="inline w-[40px]" src={testicon} alt="" />
                <h2 className=" inline  text-2xl align-middle">Scholarship Details</h2>
              </div>
              <p className="mx-3 p-3 ">
                Give the test at a date and time of your choice. <br />Timings :
                Anytime | Duration : 1 Hr <br /> Mode : Online (From Anywhere)
              </p>
            </div>

           
          </div>
        </Container>
      </div>
    </>
  );
}

export default scholarshipDetails;
