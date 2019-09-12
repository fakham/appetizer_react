import React from "react";
import bg3 from "../../assets/images/bg_3.jpg";

const Header2 = props => {
  return (
    <section
      className="hero-wrap hero-wrap-2"
      style={{ backgroundImage: `url(${bg3})` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-end justify-content-center">
          <div className="col-md-9 text-center">
            <h1 className="mb-2 bread">{props.title}</h1>
            <p className="breadcrumbs">
              <span className="mr-2">
                <a href="/">
                  Home <i className="ion-ios-arrow-forward"></i>
                </a>
              </span>{" "}
              <span>
                {props.subtitle} <i className="ion-ios-arrow-forward"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header2;
