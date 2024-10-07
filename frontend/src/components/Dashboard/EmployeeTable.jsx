import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "http://localhost:YOUR_PORT/api/employees"
        );
        setEmployees(response.data);
        setFilteredEmployees(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des employés", error);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    const filterResults = () => {
      let filtered = employees;

      if (nameFilter) {
        filtered = filtered.filter((employee) =>
          employee.name.toLowerCase().includes(nameFilter.toLowerCase())
        );
      }

      if (roleFilter) {
        filtered = filtered.filter((employee) =>
          employee.role.toLowerCase().includes(roleFilter.toLowerCase())
        );
      }

      setFilteredEmployees(filtered);
    };

    filterResults();
  }, [nameFilter, roleFilter, employees]);

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
          placeholder="Filtrer par rôle"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Nom</th>
            <th className="border border-gray-300 p-2">Rôle</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td className="border border-gray-300 p-2">{employee.name}</td>
              <td className="border border-gray-300 p-2">{employee.role}</td>
              <td className="border border-gray-300 p-2 flex space-x-2">
                <button
                  onClick={() =>
                    console.log(`Modifier l'employé avec l'ID: ${employee.id}`)
                  }
                  className="bg-blue-500 text-white p-1 rounded"
                >
                  Modifier
                </button>
                <button
                  onClick={() =>
                    console.log(`Supprimer l'employé avec l'ID: ${employee.id}`)
                  }
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Supprimer
                </button>
                <button
                  onClick={() =>
                    console.log(`Consulter l'employé avec l'ID: ${employee.id}`)
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

export default EmployeeTable;
