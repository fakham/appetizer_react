import React from "react";
import insta1 from "../../assets/images/insta-1.jpg";
import insta2 from "../../assets/images/insta-2.jpg";
import insta3 from "../../assets/images/insta-3.jpg";
import insta4 from "../../assets/images/insta-4.jpg";
import insta5 from "../../assets/images/insta-5.jpg";
import insta6 from "../../assets/images/insta-6.jpg";

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container-fluid px-md-5 px-3">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Appetizer</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
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
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Open Hours</h2>
              <ul className="list-unstyled open-hours">
                <li className="d-flex">
                  <span>Monday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li className="d-flex">
                  <span>Tuesday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li className="d-flex">
                  <span>Wednesday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li className="d-flex">
                  <span>Thursday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li className="d-flex">
                  <span>Friday</span>
                  <span>9:00 - 02:00</span>
                </li>
                <li className="d-flex">
                  <span>Saturday</span>
                  <span>9:00 - 02:00</span>
                </li>
                <li className="d-flex">
                  <span>Sunday</span>
                  <span> 9:00 - 02:00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Newsletter</h2>
              <p>
                Far far away, behind the word mountains, far from the countries.
              </p>
              <form action="/" className="subscribe-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-2 text-center"
                    placeholder="Enter email address"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="form-control submit px-3"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Instagram</h2>
              <div className="thumb d-sm-flex">
                <a
                  href="/"
                  className="thumb-menu img"
                  style={{ backgroundImage: `url(${insta1})` }}
                >
                  {" "}
                </a>
                <a
                  href="/"
                  className="thumb-menu img"
                  style={{ backgroundImage: `url(${insta2})` }}
                >
                  {" "}
                </a>
                <a
                  href="/"
                  className="thumb-menu img"
                  style={{ backgroundImage: `url(${insta3})` }}
                >
                  {" "}
                </a>
              </div>
              <div className="thumb d-flex">
                <a
                  href="/"
                  className="thumb-menu img"
                  style={{ backgroundImage: `url(${insta4})` }}
                >
                  {" "}
                </a>
                <a
                  href="/"
                  className="thumb-menu img"
                  style={{ backgroundImage: `url(${insta5})` }}
                >
                  {" "}
                </a>
                <a
                  href="/"
                  className="thumb-menu img"
                  style={{ backgroundImage: `url(${insta6})` }}
                >
                  {" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{" "}
              <i className="icon-heart" aria-hidden="true"></i> by{" "}
              <a
                href="https://colorlib.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
