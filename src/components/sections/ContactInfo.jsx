import React from "react";

const ContactInfo = () => {
  return (
    <section className="ftco-section contact-section bg-light">
      <div className="container">
        <div className="row d-flex contact-info">
          <div className="col-md-12 mb-4">
            <h2 className="h4 font-weight-bold">Contact Information</h2>
          </div>
          <div className="w-100"></div>
          <div className="col-md-3 d-flex">
            <div className="dbox">
              <p>
                <span>Address:</span> 198 West 21th Street, Suite 721 New York
                NY 10016
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="dbox">
              <p>
                <span>Phone:</span>{" "}
                <a href="tel://1234567920">+ 1235 2355 98</a>
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="dbox">
              <p>
                <span>Email:</span>{" "}
                <a href="mailto:info@yoursite.com">info@yoursite.com</a>
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="dbox">
              <p>
                <span>Website</span> <a href="/">yoursite.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
