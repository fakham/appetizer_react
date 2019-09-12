import React from "react";
import Header from "../components/sections/Header";
import NavBar from "../components/sections/NavBar";
import Header2 from "../components/sections/Header2";
import { default as ReservationSection } from "../components/sections/Reservation";
import Footer from "../components/sections/Footer";

const Reservation = () => {
  return (
    <>
      <Header />
      <NavBar page="Reservation" />
      <Header2 title="Reservation" subtitle="Reservation" />
      <ReservationSection />
      <Footer />
    </>
  );
};

export default Reservation;
