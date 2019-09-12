import React from "react";
import Header from "../components/sections/Header";
import NavBar from "../components/sections/NavBar";
import Header2 from "../components/sections/Header2";
import Images from "../components/sections/Images";
import Footer from "../components/sections/Footer";
import ContactInfo from "../components/sections/ContactInfo";
import ContactForm from "../components/sections/ContactForm";

const Contact = () => {
  return (
    <>
      <Header />
      <NavBar page="Contact" />
      <Header2 title="Contact Us" subtitle="Contact" />
      <ContactInfo />
      <ContactForm />
      <Images />
      <Footer />
    </>
  );
};

export default Contact;
