import React from "react";
import bg1 from "../assets/images/bg_1.jpg";
import bg2 from "../assets/images/bg_2.jpg";
import bg3 from "../assets/images/bg_3.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HomeSlider = () => {
  return (
    <OwlCarousel
      className="home-slider js-fullheight"
      items={1}
      autoplay
      loop
      nav
    >
      <div className="item">
        <div
          className="slider-item js-fullheight"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row slider-text js-fullheight justify-content-center align-items-center"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 col-sm-12 text-center">
                <h1 className="mb-4 mt-5">Our Delicious Specialties</h1>
                <p>
                  <a href="/" className="btn btn-primary p-3 px-xl-4 py-xl-3">
                    Order Now
                  </a>{" "}
                  <a
                    href="/"
                    className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                  >
                    View Menu
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div
          className="slider-item js-fullheight"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row slider-text js-fullheight justify-content-center align-items-center"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 col-sm-12 text-center">
                <h1 className="mb-4 mt-5">Our Delicious Specialties</h1>
                <p>
                  <a href="/" className="btn btn-primary p-3 px-xl-4 py-xl-3">
                    Order Now
                  </a>{" "}
                  <a
                    href="/"
                    className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                  >
                    View Menu
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div
          className="slider-item js-fullheight"
          style={{ backgroundImage: `url(${bg3})` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row slider-text js-fullheight justify-content-center align-items-center"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 col-sm-12 text-center">
                <h1 className="mb-4 mt-5">Our Delicious Specialties</h1>
                <p>
                  <a href="/" className="btn btn-primary p-3 px-xl-4 py-xl-3">
                    Order Now
                  </a>{" "}
                  <a
                    href="/"
                    className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                  >
                    View Menu
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default HomeSlider;
