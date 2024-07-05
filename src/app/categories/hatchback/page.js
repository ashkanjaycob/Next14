import React from "react";
import carsData from "../../../../components/Data.js/carsData";
import CarList from "../../../../components/module/CarList";

function Hatchback() {
  const HatchbackCars = carsData.filter((car) => car.category === "hatchback");

  return <CarList data={HatchbackCars} />;
}

export default Hatchback;
