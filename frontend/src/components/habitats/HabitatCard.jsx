import React from "react";
import { Link } from "react-router-dom";

const HabitatCard = ({ habitat }) => {
  return (
    <div className="shadow-xl shadow-[#6B8E23] rounded-lg overflow-hidden">
      <Link to={`/habitats/${habitat.habitat_id}`}>
        <img
          src={`http://localhost${habitat.image_URL}`}
          alt={habitat.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-2xl font-jomolhari font-semibold">
            {habitat.name}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default HabitatCard;
