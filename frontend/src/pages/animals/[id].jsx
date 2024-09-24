import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";

const AnimalDetails = () => {
  const { id } = useParams(); // Récupère l'id' de l'animal depuis l'URL
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await axios.get(
          `http://localhost/php_serv/front/animal/${id}`
        );
        setAnimal(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimal();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Erreur: {error}</p>;*/

  return (
    animal && (
      <>
        <Header />
        <Navbar />
        <div className="p-6 bg-[#FFFFE0] min-h-screen grid grid-cols-1 justify-items-center">
          <h1 className="text-4xl font-jomolhari text-[#231301] mb-4 mt-4 text-center">
            {animal.animal_name}
          </h1>
          <img
            src={`http://localhost${animal.image_URL}`}
            alt={animal.animal_name}
            className="w-1/2 h-80 rounded-full object-cover mb-2 self-center"
          />
          <p className="text-2xl font-jomolhari">Espèce : {animal.race_name}</p>
          <p className="text-2xl font-jomolhari">
            Habitat : {animal.habitat_name}
          </p>
        </div>
        <Footer />
      </>
    )
  );
};

export default AnimalDetails;
