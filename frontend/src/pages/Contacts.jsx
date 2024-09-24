import React from "react";
import ContactForm from "../components/contact/ContactForm";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const Contacts = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contacts;
