import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VetPage = () => {
  const { id } = useParams();
  const [vet, setVet] = useState(null);

  useEffect(() => {
    const fetchVet = async () => {
      try {
        const response = await axios.get(
          `http://localhost:YOUR_PORT/api/user/${id}`
        );
        setVet(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données du vétérinaire",
          error
        );
      }
    };

    fetchVet();
  }, [id]);

  if (!vet) return <p>Chargement...</p>;

  return (
    <div>
      <h1>Vétérinaire: {vet.name}</h1>
      <p>Email: {vet.email}</p>
      <p>Spécialité: {vet.specialty}</p>
      {/* Ajoutez d'autres informations spécifiques au vétérinaire */}
    </div>
  );
};

export default VetPage;
