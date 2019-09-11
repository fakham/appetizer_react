import React from "react";
import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar";
import About from "../components/common/About";
import HomeSlider from "../components/HomeSlider";
import Info from "../components/common/Info";
import Services from "../components/common/Services";
import Menu from "../components/common/Menu";
import Reservation from "../components/common/Reservation";
import MasterChef from "../components/common/MasterChef";
import Customers from "../components/common/Customers";
import Images from "../components/common/Images";
import Footer from "../components/common/Footer";

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
