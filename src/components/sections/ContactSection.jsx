import React from "react";
import ContactForm from "./common/ContactForm";

const ContactSection = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
      <div className="container">
        <div className="row d-flex align-items-stretch no-gutters">
          <div className="col-md-6 p-5 order-md-last">
            <h2 className="h4 mb-5 font-weight-bold">Contact Us</h2>
            <ContactForm />
          </div>
          <div className="col-md-6 d-flex align-items-stretch">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
