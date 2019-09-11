import React from "react";
import chef1 from "../../assets/images/chef-1.jpg";
import chef2 from "../../assets/images/chef-2.jpg";
import chef3 from "../../assets/images/chef-3.jpg";
import chef4 from "../../assets/images/chef-4.jpg";

const MasterChef = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Chef</span>
            <h2 className="mb-4">Our Master Chef</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="staff">
              <div
                className="img"
                style={{ backgroundImage: `url(${chef4})` }}
              ></div>
              <div className="text pt-4">
                <h3>John Smooth</h3>
                <span className="position mb-2">Restaurant Owner</span>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <div className="faded">
                  <ul className="ftco-social d-flex">
                    <li className="">
                      <a href="/">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/">
                        <span className="icon-google-plus"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="staff">
              <div
                className="img"
                style={{ backgroundImage: `url(${chef2})` }}
              ></div>
              <div className="text pt-4">
                <h3>Rebeca Welson</h3>
                <span className="position mb-2">Head Chef</span>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <div className="faded">
                  <ul className="ftco-social d-flex">
                    <li className="">
                      <a href="/">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/">
                        <span className="icon-google-plus"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="staff">
              <div
                className="img"
                style={{ backgroundImage: `url(${chef3})` }}
              ></div>
              <div className="text pt-4">
                <h3>Kharl Branyt</h3>
                <span className="position mb-2">Chef</span>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <div className="faded">
                  <ul className="ftco-social d-flex">
                    <li className="">
                      <a href="/">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/">
                        <span className="icon-google-plus"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="staff">
              <div
                className="img"
                style={{ backgroundImage: `url(${chef1})` }}
              ></div>
              <div className="text pt-4">
                <h3>Luke Simon</h3>
                <span className="position mb-2">Chef</span>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <div className="faded">
                  <ul className="ftco-social d-flex">
                    <li className="">
                      <a href="/">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/">
                        <span className="icon-google-plus"></span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterChef;
