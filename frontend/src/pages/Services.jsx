import React, { useEffect, useState, startTransition } from "react";
import axios from "axios";
import ServiceCard from "../components/serviceComponents/ServiceCard";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "http://localhost/php_serv/front/services"
        );
        startTransition(() => {
          setServices(response.data);
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Erreur: {error}</p>;

  return (
    <>
      <Header />
      <Navbar />
      <div className="p-6 bg-[#FFFFE0] min-h-screen">
        <h1 className="text-lg md:text-4xl font-jomolhari text-[#231301] mb-8 text-center">
          Nos Services
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.service_id} service={service} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
