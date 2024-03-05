import Container from "../../components/wrappers/Container";
import champ1 from "../../assets/champ1.jpg";
import champ2 from "../../assets/champ2.jpg";
import champ3 from "../../assets/champ3.jpg";
function LastYearChamps() {
    return (
      <>
      <div className="bg-pink-800">
        <Container>

        

          <h1 className="text-center text-[#fff] text-4xl pt-8 font-bold">OUR LAST YEAR CHAMPS</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-1  lg:p-8  sm:p-0">
            <div className="m-auto mt-3  "> 
              <img className="rounded-md w-[250px]  " src={champ1} alt="" />  
              {/* <p className="text-center ">Abishek Gupta <span>AIR 1</span></p> */}
            </div>
            <div className="m-auto mt-3">
              <img  className="rounded-md w-[250px] "src={champ2} alt="" /> 
            </div>
            <div className=" m-auto mt-3">
              <img  className="rounded-md w-[250px] "src={champ3} alt="" /> 
            </div>
          </div>
          <p className="text-center text-[#fff] text-xl font-bold ">Congrats! Keep believing in yourself and work hard; <br /> more achievements are yet to come!</p>
          </Container>
      </div>
      </>
    );
  }
  
  export default LastYearChamps;