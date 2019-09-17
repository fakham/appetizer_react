import React from "react";
import ReservationForm from "./common/ReservationForm";

const Reservation = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb">
      <div className="container-fluid px-0">
        <div className="row d-flex no-gutters">
          <div className="col-md-6 makereservation p-4 p-md-5 pt-5 pt-md-0">
            <div className="heading-section mb-5">
              <span className="subheading">Book a table</span>
              <h2 className="mb-4">Make Reservation</h2>
            </div>
            <ReservationForm />
          </div>
          <div className="col-md-6 d-flex align-items-stretch pb-5 pb-md-0">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
