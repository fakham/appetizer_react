import React from "react";
import Header from "../components/sections/Header";
import NavBar from "../components/sections/NavBar";
import Header2 from "../components/sections/Header2";
import { default as MenuSection } from "../components/sections/Menu";
import Reservation from "../components/sections/Reservation";
import Footer from "../components/sections/Footer";

const Menu = () => {
  return (
    <>
      <Header />
      <NavBar page="Menu" />
      <Header2 title="Our Specialties" subtitle="Menu" />
      <MenuSection />
      <Reservation />
      <Footer />
    </>
  );
};

export default Menu;
