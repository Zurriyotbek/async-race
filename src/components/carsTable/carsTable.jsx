import React from "react";
import CarRow from "../carRow/carRow";

function CarsTable(props) {
  let { carsData, setIsModalOpen } = props;

  return (
    <div className="mb-16">
      {carsData.map((car) => (
        <CarRow key={car.id} car={car} setIsModalOpen={setIsModalOpen} />
      ))}
    </div>
  );
}

export default CarsTable;
