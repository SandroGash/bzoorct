import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const Intro = () => {
  return (
    <div className="p-6 bg-[#E9DECB] h-auto">
      <div className="text-center mb-8">
        <p className="text-[#231301] text-xl md:text-4xl font-jomolhari font-light">
          Bienvenue dans notre zoo légendaire, où chaque recoin vous fera
          voyager
        </p>
      </div>

      <div className="relative">
        <Link
          to="/habitats"
          className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#231301] text-white font-jomolhari px-6 py-2 rounded-full text-xl hover:bg-[#4a2a19] z-10 opacity-80"
        >
          habitats
        </Link>

        <div className="overflow-hidden rounded-3xl">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Intro;
