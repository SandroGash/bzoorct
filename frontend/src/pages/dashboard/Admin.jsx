import React from "react";
import AnimalsTable from "./AnimalsTable";
import EmployeeTable from "./EmployeeTable";
import ServicesTable from "./ServicesTable";
import HabitatsTable from "./HabitatsTable";
import PopularityChart from "./PopularityChart";

const Admin = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard Admin</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Composant pour les employés */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Employés</h2>
          <EmployeeTable />
        </div>

        {/* Composant pour les animaux */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Animaux</h2>
          <AnimalsTable />
        </div>

        {/* Composant pour les services */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ServicesTable />
        </div>

        {/* Composant pour les habitats */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Habitats</h2>
          <HabitatsTable />
        </div>

        {/* Composant graphique de popularité */}
        <div className="bg-white shadow-md rounded-lg p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold mb-4">Popularité des Animaux</h2>
          <PopularityChart />
        </div>
      </div>
    </div>
  );
};

export default Admin;
