"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import carsData from "../../../../components/Data.js/carsData";
import CarDetailer from "../../../../components/module/CarDetailer";


function CarDetails() {
  const { carId } = useParams();
  const [id, setId] = useState(null);

  const carDetails = carsData[ carId - 1];
  console.log(carDetails);

  useEffect(() => {
    if (carId) {
      setId(carId);
      console.log(carId);
    }
  }, [carId]);

  return <CarDetailer {...carDetails}/>;
}

export default CarDetails;
