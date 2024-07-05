import React from "react";
import CarList from "../../../../components/module/CarList";
import carsData from "../../../../components/Data.js/carsData";

function Sedan() {
  const sedan = carsData.filter((car) => car.category === "sedan");

  return <CarList data={sedan} />;
}

export default Sedan;
