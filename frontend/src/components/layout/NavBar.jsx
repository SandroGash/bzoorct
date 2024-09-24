import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icones pour le menu burger

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); //menu burger
  const location = useLocation();
  const path = location.pathname.substring(1).toLowerCase();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkStyle = (currentPath) =>
    `px-4 md:px-5 py-2 md:py-3 rounded-full text-white font-jomolhari text-lg md:text-xl transition-colors duration-300 ${
      path === currentPath ? "bg-[#3F6212]" : "bg-[#6B8E23] hover:bg-[#8b9d56]"
    }`;

  return (
    <nav className="bg-[#6B8E23] p-4 rounded-xl ml-2 mr-2">
      <div className="flex justify-center items-center">
        <div className="md:hidden">
          {/* Bouton burger mobile */}
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="text-white font-jomolhari text-3xl" />
            ) : (
              <FiMenu className="text-white font-jomolhari text-3xl" />
            )}
          </button>
        </div>
        <ul className="hidden md:flex justify-center space-x-8">
          {/* Navigation centrée visible seulement sur grand écran */}
          <li>
            <Link to="/" className={linkStyle("")}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/services" className={linkStyle("services")}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/habitats" className={linkStyle("habitats")}>
              Habitats
            </Link>
          </li>
          <li>
            <Link to="/contacts" className={linkStyle("contacts")}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
      {/* Menu mobile centré */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center">
          <li>
            <Link to="/" className={linkStyle("")} onClick={toggleMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={linkStyle("services")}
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/habitats"
              className={linkStyle("habitats")}
              onClick={toggleMenu}
            >
              Habitats
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              className={linkStyle("contacts")}
              onClick={toggleMenu}
            >
              Contacts
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
