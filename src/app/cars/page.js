import CarsPage from "../../../components/CarsPage/CarsPage";
import carsData from "../../../components/Data.js/carsData";
import Categories from "../../../components/module/Categories";
import SearchBar from "../../../components/module/SearchBar";

function page() {
  return (
    <>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </>
  );
}

export default page;
