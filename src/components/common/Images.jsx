import React from "react";
import insta1 from "../../assets/images/insta-1.jpg";
import insta2 from "../../assets/images/insta-2.jpg";
import insta3 from "../../assets/images/insta-3.jpg";
import insta4 from "../../assets/images/insta-4.jpg";
import insta5 from "../../assets/images/insta-5.jpg";

const Images = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb">
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-md">
            <a
              href="/"
              className="instagram img d-flex align-items-center justify-content-center"
              style={{ backgroundImage: `url(${insta1})` }}
            >
              <span className="ion-logo-instagram"></span>
            </a>
          </div>
          <div className="col-md">
            <a
              href="/"
              className="instagram img d-flex align-items-center justify-content-center"
              style={{ backgroundImage: `url(${insta2})` }}
            >
              <span className="ion-logo-instagram"></span>
            </a>
          </div>
          <div className="col-md">
            <a
              href="/"
              className="instagram img d-flex align-items-center justify-content-center"
              style={{ backgroundImage: `url(${insta3})` }}
            >
              <span className="ion-logo-instagram"></span>
            </a>
          </div>
          <div className="col-md">
            <a
              href="/"
              className="instagram img d-flex align-items-center justify-content-center"
              style={{ backgroundImage: `url(${insta4})` }}
            >
              <span className="ion-logo-instagram"></span>
            </a>
          </div>
          <div className="col-md">
            <a
              href="/"
              className="instagram img d-flex align-items-center justify-content-center"
              style={{ backgroundImage: `url(${insta5})` }}
            >
              <span className="ion-logo-instagram"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Images;
