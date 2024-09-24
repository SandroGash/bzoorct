import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AnimalCard from "../animals/AnimalCard";

const SearchAnimals = () => {
  const { id } = useParams(); // Récupère l'id de l'habitat depuis l'URL
  const [animals, setAnimals] = useState([]);
  const [races, setRaces] = useState([]);
  const [selectedRace, setSelectedRace] = useState("");
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  // Requête pour récupérer les animaux de l'habitat
  /*useEffect(() => {
    axios
      .get("http://localhost/php_serv/front/animals")
      .then((response) => {
        // Filtrer les animaux par habitat_id
        const animalsInHabitat = response.data.filter(
          (animal) => animal.habitat_id === parseInt(id)
        );
        console.log(response.data);

        // Supprimer les doublons avec un Set
        const uniqueAnimals = Array.from(
          new Set(animalsInHabitat.map((animal) => animal.animal_name))
        ).map((name) =>
          animalsInHabitat.find((animal) => animal.animal_name === name)
        );

        setAnimals(uniqueAnimals);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des animaux:", error);
      });
  }, [id]);

  // Requête pour récupérer les races
  useEffect(() => {
    axios
      .get("http://localhost/php_serv/front/races")
      .then((response) => {
        // Filtrer les races par habitat_id
        const racesInHabitat = response.data.filter(
          (race) => race.habitat_id === parseInt(id)
        );

        setRaces(racesInHabitat);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des races:", error);
      });
  }, [id]);

  // Filtrer les animaux en fonction de la race sélectionnée
  useEffect(() => {
    if (selectedRace) {
      const filtered = animals.filter(
        (animal) => animal.race_name === selectedRace
      );
      console.log(filtered);
      setFilteredAnimals(filtered);
    } else {
      setFilteredAnimals(animals); // Afficher tous les animaux si aucune race n'est sélectionnée
    }
  }, [selectedRace, animals]);*/

  return (
    <div className="p-6 bg-[#E9DECB] rounded-lg shadow-md mx-auto">
      <h2 className="text-2xl font-jomolhari font-semibold mb-6 text-center">
        Recherche d'animaux
      </h2>

      <label
        htmlFor="race-select"
        className="mb-2 font-medium block text-center"
      >
        Sélectionnez une espèce :
      </label>
      <select
        id="race-select"
        value={selectedRace}
        onChange={(e) => setSelectedRace(e.target.value)}
        className="mb-4 p-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6B8E23] transition duration-150 ease-in-out block w-full max-w-xs mx-auto text-center text-gray-700"
        style={{ textAlignLast: "center" }}
      >
        <option value="">Toutes les espèces</option>
        {races.map((race) => (
          <option key={race.race_id} value={race.race_name}>
            {race.race_name}
          </option>
        ))}
      </select>

      <div className="animal-grid flex flex-wrap justify-center mt-4">
        {filteredAnimals.map((animal) => (
          <AnimalCard key={animal.animal_id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default SearchAnimals;
