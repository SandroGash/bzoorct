import React, { useEffect, useState } from "react";
import axios from "axios";

const HabitatsTable = () => {
  const [habitats, setHabitats] = useState([]);

  useEffect(() => {
    const fetchHabitats = async () => {
      try {
        const response = await axios.get(
          "http://localhost:YOUR_PORT/api/habitats"
        ); // Remplacez par votre URL API
        setHabitats(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des habitats", error);
      }
    };

    fetchHabitats();
  }, []);

  const handleEdit = (id) => {
    console.log(`Modifier l'habitat avec l'ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Supprimer l'habitat avec l'ID: ${id}`);
  };

  const handleView = (id) => {
    console.log(`Consulter l'habitat avec l'ID: ${id}`);
  };

  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Nom</th>
          <th className="border border-gray-300 p-2">Description</th>
          <th className="border border-gray-300 p-2">État</th>
          <th className="border border-gray-300 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {habitats.map((habitat) => (
          <tr key={habitat.id}>
            <td className="border border-gray-300 p-2">{habitat.name}</td>
            <td className="border border-gray-300 p-2">
              {habitat.description}
            </td>
            <td className="border border-gray-300 p-2">{habitat.state}</td>
            <td className="border border-gray-300 p-2 flex space-x-2">
              <button
                onClick={() => handleEdit(habitat.id)}
                className="bg-blue-500 text-white p-1 rounded"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDelete(habitat.id)}
                className="bg-red-500 text-white p-1 rounded"
              >
                Supprimer
              </button>
              <button
                onClick={() => handleView(habitat.id)}
                className="bg-green-500 text-white p-1 rounded"
              >
                Consulter
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HabitatsTable;
