import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import SearchAnimals from "../../components/habitats/SearchAnimals";

const HabitatDetails = () => {
  const { id } = useParams(); // Récupère l'id' de l'habitat depuis l'URL
  const [habitat, setHabitat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHabitat = async () => {
      try {
        const response = await axios.get(
          `http://localhost/php_serv/front/habitat/${id}`
        );
        setHabitat(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHabitat();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Erreur: {error}</p>;

  return (
    habitat && (
      <>
        <Header />
        <Navbar />
        <div className="p-6 bg-[#FFFFE0] min-h-screen">
          <h1 className="text-4xl font-jomolhari text-[#231301] mb-8 text-center">
            {habitat.habitat_name}
          </h1>
          <img
            src={`http://localhost${habitat.image_URL}`}
            alt={habitat.habitat_name}
            className="w-full h-96 rounded-lg object-cover mb-6"
          />
          <p className="text-2xl font-jomolhari text-center">
            {habitat.description}
          </p>
        </div>

        <SearchAnimals />

        <Footer />
      </>
    )
  );
};

export default HabitatDetails;
