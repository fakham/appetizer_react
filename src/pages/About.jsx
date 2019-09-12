import React from "react";
import Header from "../components/sections/Header";
import NavBar from "../components/sections/NavBar";
import Header2 from "../components/sections/Header2";
import Info from "../components/sections/Info";
import Services from "../components/sections/Services";
import MasterChef from "../components/sections/MasterChef";
import Customers from "../components/sections/Customers";
import Images from "../components/sections/Images";
import Footer from "../components/sections/Footer";
import { default as AboutSection } from "../components/sections/About";

const About = () => {
  return (
    <>
      <Header />
      <NavBar page="About" />
      <Header2 title="About" subtitle="About" />
      <AboutSection />
      <Info />
      <Services />
      <MasterChef />
      <Customers />
      <Images />
      <Footer />
    </>
  );
};

export default About;
