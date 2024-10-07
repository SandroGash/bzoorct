import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EmployeePage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:YOUR_PORT/api/user/${id}`
        );
        setEmployee(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'employé",
          error
        );
      }
    };

    fetchEmployee();
  }, [id]);

  if (!employee) return <p>Chargement...</p>;

  return (
    <div>
      <h1>Employé: {employee.name}</h1>
      <p>Email: {employee.email}</p>
      <p>Poste: {employee.position}</p>
      {/* Ajoutez d'autres informations spécifiques à l'employé */}
    </div>
  );
};

export default EmployeePage;
