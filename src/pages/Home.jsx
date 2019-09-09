import React from "react";
import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar";
import About from "../components/common/About";
import HomeSlider from "../components/HomeSlider";
import Info from "../components/common/Info";

const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <HomeSlider />
      <About />
      <Info />
    </>
  );
};

export default Home;
