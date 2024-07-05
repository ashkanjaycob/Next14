"use client";

import carsData from "../../../../components/Data.js/carsData";
import { useParams } from "next/navigation";
import CarList from "../../../../components/module/CarList";

function FilteredCars() {
    
  const { slug } = useParams();
  //   console.log(slug);
  const [min, max] = slug;
  //   console.log(min);

  const filteredData = carsData.filter( car => car.price > min && car.price < max );
    console.log(filteredData);
  if ( !filteredData.length ) return <h3>Not Found In this Price Area !</h3> ;

  return (
    <CarList data={filteredData} />
  );
}

export default FilteredCars;
