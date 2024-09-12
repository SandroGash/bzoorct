import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname.substring(1); // Extrait le nom de l'onglet à partir du chemin

  return (
    <nav className="bg-[#6B8E23] p-4">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link
            to="/services"
            className={`text-white text-2xl font-jomolhari ${
              path === "services" ? "font-bold" : ""
            }`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/habitats"
            className={`text-white text-2xl font-jomolhari ${
              path === "habitats" ? "font-bold" : ""
            }`}
          >
            Habitats
          </Link>
        </li>
        <li>
          <Link
            to="/Contacts"
            className={`text-white text-2xl font-jomolhari ${
              path === "contacts" ? "font-bold" : ""
            }`}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
