import React from "react";
import Header from "../components/sections/Header";
import NavBar from "../components/sections/NavBar";
import About from "../components/sections/About";
import HomeSlider from "../components/HomeSlider";
import Info from "../components/sections/Info";
import Services from "../components/sections/Services";
import Menu from "../components/sections/Menu";
import Reservation from "../components/sections/Reservation";
import MasterChef from "../components/sections/MasterChef";
import Customers from "../components/sections/Customers";
import Images from "../components/sections/Images";
import Footer from "../components/sections/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <HomeSlider />
      <About />
      <Info />
      <Services />
      <Menu />
      <Reservation />
      <MasterChef />
      <Customers />
      <Images />
      <Footer />
    </>
  );
};

export default Home;
