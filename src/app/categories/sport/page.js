import React from "react";
import CarList from "../../../../components/module/CarList";
import carsData from "../../../../components/Data.js/carsData";

function SportCars() {
  const sport = carsData.filter((car) => car.category === "sport");

  return <CarList data={sport} />;
}

export default SportCars;
