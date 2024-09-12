import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/NavBar";
import Intro from "../components/homeComponents/Intro";
import ResidentsSection from "../components/homeComponents/AnimalSlider";

const Index = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Intro />
      <ResidentsSection />
      <div>Home Page</div>
      <Footer />
    </>
  );
};

export default Index;
