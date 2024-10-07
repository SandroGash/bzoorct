import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importer Link

const LoginButton = () => {
  // État pour savoir si l'utilisateur est connecté
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Vérification de l'état de connexion au chargement
  useEffect(() => {
    const token = sessionStorage.getItem("token"); // Vérifiez si le token existe
    setIsLoggedIn(!!token); // Définit l'état en fonction de l'existence du token
  }, []);

  // Fonction de déconnexion
  const handleLogout = () => {
    // Logique pour déconnexion
    sessionStorage.removeItem("token"); // Supprimez le token
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="text-white bg-[#231301] hover:bg-[#4a2a19] px-6 py-2 rounded-full"
        >
          Déconnexion
        </button>
      ) : (
        <Link to="/Login">
          <button className="text-white bg-[#231301] hover:bg-[#4a2a19] px-6 py-2 rounded-full">
            Connexion
          </button>
        </Link>
      )}
    </div>
  );
};

export default LoginButton;
