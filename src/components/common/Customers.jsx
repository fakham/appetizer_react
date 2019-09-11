import React from "react";
import bg5 from "../../assets/images/bg_5.jpg";
import person1 from "../../assets/images/person_1.jpg";
import person2 from "../../assets/images/person_2.jpg";
import person3 from "../../assets/images/person_3.jpg";
import person4 from "../../assets/images/person_4.jpg";
import OwlCarousel from "react-owl-carousel";

const Customers = () => {
  return (
    <section
      className="ftco-section testimony-section img"
      style={{ backgroundImage: `url(${bg5})` }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ">
            <span className="subheading">Testimony</span>
            <h2 className="mb-4">Happy Customer</h2>
          </div>
        </div>
        <div className="row  justify-content-center">
          <div className="col-md-12">
            <OwlCarousel
              className="carousel-testimony owl-carousel ftco-owl"
              items={3}
              loop
            >
              <div className="item">
                <div className="testimony-wrap text-center pb-5">
                  <div
                    className="user-img mb-4"
                    style={{ backgroundImage: `url(${person1})` }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text p-3">
                    <p className="mb-4">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Jason McClean</p>
                    <span className="position">Customer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center pb-5">
                  <div
                    className="user-img mb-4"
                    style={{ backgroundImage: `url(${person2})` }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text p-3">
                    <p className="mb-4">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Mark Stevenson</p>
                    <span className="position">Customer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center pb-5">
                  <div
                    className="user-img mb-4"
                    style={{ backgroundImage: `url(${person3})` }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text p-3">
                    <p className="mb-4">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Art Leonard</p>
                    <span className="position">Customer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center pb-5">
                  <div
                    className="user-img mb-4"
                    style={{ backgroundImage: `url(${person4})` }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text p-3">
                    <p className="mb-4">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Rose Henderson</p>
                    <span className="position">Customer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center pb-5">
                  <div
                    className="user-img mb-4"
                    style={{ backgroundImage: `url(${person3})` }}
                  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text p-3">
                    <p className="mb-4">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Ian Boner</p>
                    <span className="position">Customer</span>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
