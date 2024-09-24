import React from "react";
import { Link } from "react-router-dom";

const AnimalCard = ({ animal }) => {
  return (
    <div className="animal-card rounded-t-3xl w-40 h-52 shadow-xl shadow-[#6B8E23] p-4 m-4 bg-[#FFFFE0] hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <Link to={`/animals/${animal.animal_id}`}>
        <img
          src={`http://localhost${animal.image_URL}`}
          alt={animal.animal_name}
          className="animal-photo rounded-full w-60 h-24 object-fit mx-auto mb-2 z-10"
        />
        <h3 className="text-lg font-semibold text-center z-50">
          {animal.animal_name}
        </h3>
        <p className="text-center text-gray-500">Espèce : {animal.race_name}</p>
      </Link>
    </div>
  );
};

export default AnimalCard;
