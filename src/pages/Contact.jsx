import React from "react";
import Header from "../components/sections/Header";
import NavBar from "../components/sections/NavBar";
import Header2 from "../components/sections/Header2";
import Images from "../components/sections/Images";
import Footer from "../components/sections/Footer";
import ContactInfo from "../components/sections/ContactInfo";
import ContactSection from "../components/sections/ContactSection";

const Contact = () => {
  return (
    <>
      <Header />
      <NavBar page="Contact" />
      <Header2 title="Contact Us" subtitle="Contact" />
      <ContactInfo />
      <ContactSection />
      <Images />
      <Footer />
    </>
  );
};

export default Contact;
