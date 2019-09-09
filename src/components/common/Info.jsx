import React from "react";
import bg4 from "../../assets/images/bg_4.jpg";

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
              <div className="col-md d-flex justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="18">
                      18
                    </strong>
                    <span>Years of Experienced</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="15000">
                      15,000
                    </strong>
                    <span>Happy Customers</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="100">
                      100
                    </strong>
                    <span>Menus</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ">
                <div className="block-18">
                  <div className="text">
                    <strong className="number" data-number="20">
                      20
                    </strong>
                    <span>Staffs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
