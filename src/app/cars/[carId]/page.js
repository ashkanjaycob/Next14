"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import carsData from "../../../../components/Data.js/carsData";


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

  return <div>CarDetails {id}</div>;
}

export default CarDetails;
