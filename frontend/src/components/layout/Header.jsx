import React from "react";
import LoginButton from "../buttons/LoginButton";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-[#FFFFE0] rounded-lg">
      <div className="flex flex-col items-center md:flex-row md:space-x-4">
        <img
          src="../../src/assets/images/logo.jpg"
          alt="logo"
          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
        />
        <div className="flex flex-col items-center md:flex-wrap">
          <h1 className="text-2xl md:text-4xl font-thin font-jomolhari">
            ZOO ARCADIA
          </h1>
          <p className="text-lg md:text-2xl font-thin font-jomolhari">
            Brocéliande
          </p>
        </div>
      </div>

      <div className="mt-4 md:mt-0">
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
