import React, { useEffect, useState } from "react";
import axios from "axios";

const ServicesTable = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "http://localhost:YOUR_PORT/api/services"
        ); // Remplacez par votre URL API
        setServices(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des services", error);
      }
    };

    fetchServices();
  }, []);

  const handleEdit = (id) => {
    console.log(`Modifier le service avec l'ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Supprimer le service avec l'ID: ${id}`);
  };

  const handleView = (id) => {
    console.log(`Consulter le service avec l'ID: ${id}`);
  };

  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Nom</th>
          <th className="border border-gray-300 p-2">Description</th>
          <th className="border border-gray-300 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service) => (
          <tr key={service.id}>
            <td className="border border-gray-300 p-2">{service.name}</td>
            <td className="border border-gray-300 p-2">
              {service.description}
            </td>
            <td className="border border-gray-300 p-2 flex space-x-2">
              <button
                onClick={() => handleEdit(service.id)}
                className="bg-blue-500 text-white p-1 rounded"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDelete(service.id)}
                className="bg-red-500 text-white p-1 rounded"
              >
                Supprimer
              </button>
              <button
                onClick={() => handleView(service.id)}
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

export default ServicesTable;
