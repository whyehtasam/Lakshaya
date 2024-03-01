import { Button } from "primereact/button";
// import DropdownMenu from "./components/DropdownMenu";
import ButtonPrimary from "./components/buttons/ButtonPrimary";

function App() {
  return (
    <>
      {/* <DropdownMenu/> */}
      <ButtonPrimary label="Submit" style=" bg-red-700 w-fit text-white " />
      <ButtonPrimary label="Cancel" style=" bg-sky-700 w-fit text-white " />
    </>
  );
}

export default App;
