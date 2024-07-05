import CarsPage from "../../../components/CarsPage/CarsPage";
import carsData from "../../../components/Data.js/carsData";

function page() {
  return (
    <CarsPage data={carsData}/>
  );
}

export default page;
