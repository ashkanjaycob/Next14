import React from 'react'
import CarList from '../../../../components/module/CarList';
import carsData from '../../../../components/Data.js/carsData';

function Suv() {

  const suv = carsData.filter((car) => car.category === "suv");

  return <CarList data={suv} />;

}

export default Suv