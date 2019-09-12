import React from "react";
import bg4 from "../../assets/images/bg_4.jpg";
import InfoItem from "./common/InfoItem";

const infos = [
  {
    title: "Years of Experienced",
    data: 18
  },
  {
    title: "Happy Customers",
    data: 15000
  },
  {
    title: "Menus",
    data: 100
  },
  {
    title: "Staffs",
    data: 20
  }
];

const Info = () => {
  return (
    <section
      className="ftco-section ftco-counter img"
      id="section-counter"
      style={{ backgroundImage: `url(${bg4})` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row d-md-flex align-items-center justify-content-center">
          <div className="col-lg-10">
            <div className="row d-md-flex align-items-center">
              {infos.map((item, index) => (
                <InfoItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
