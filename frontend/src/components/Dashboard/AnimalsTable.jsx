import React, { useEffect, useState } from "react";
import axios from "axios";

const AnimalsTable = () => {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [raceFilter, setRaceFilter] = useState("");
  const [habitatFilter, setHabitatFilter] = useState("");

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get(
          "http://localhost:YOUR_PORT/api/animals"
        );
        setAnimals(response.data);
        setFilteredAnimals(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des animaux", error);
      }
    };

    fetchAnimals();
  }, []);

  useEffect(() => {
    const filterResults = () => {
      let filtered = animals;

      if (nameFilter) {
        filtered = filtered.filter((animal) =>
          animal.name.toLowerCase().includes(nameFilter.toLowerCase())
        );
      }

      if (raceFilter) {
        filtered = filtered.filter((animal) =>
          animal.race.toLowerCase().includes(raceFilter.toLowerCase())
        );
      }

      if (habitatFilter) {
        filtered = filtered.filter((animal) =>
          animal.habitat.toLowerCase().includes(habitatFilter.toLowerCase())
        );
      }

      setFilteredAnimals(filtered);
    };

    filterResults();
  }, [nameFilter, raceFilter, habitatFilter, animals]);

  return (
    <div>
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          placeholder="Filtrer par nom"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Filtrer par race"
          value={raceFilter}
          onChange={(e) => setRaceFilter(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Filtrer par habitat"
          value={habitatFilter}
          onChange={(e) => setHabitatFilter(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Nom</th>
            <th className="border border-gray-300 p-2">Race</th>
            <th className="border border-gray-300 p-2">Habitat</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAnimals.map((animal) => (
            <tr key={animal.id}>
              <td className="border border-gray-300 p-2">{animal.name}</td>
              <td className="border border-gray-300 p-2">{animal.race}</td>
              <td className="border border-gray-300 p-2">{animal.habitat}</td>
              <td className="border border-gray-300 p-2 flex space-x-2">
                <button
                  onClick={() =>
                    console.log(`Modifier l'animal avec l'ID: ${animal.id}`)
                  }
                  className="bg-blue-500 text-white p-1 rounded"
                >
                  Modifier
                </button>
                <button
                  onClick={() =>
                    console.log(`Supprimer l'animal avec l'ID: ${animal.id}`)
                  }
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Supprimer
                </button>
                <button
                  onClick={() =>
                    console.log(`Consulter l'animal avec l'ID: ${animal.id}`)
                  }
                  className="bg-green-500 text-white p-1 rounded"
                >
                  Consulter
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimalsTable;
