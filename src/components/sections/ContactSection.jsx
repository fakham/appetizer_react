import React from "react";

const ContactSection = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
      <div className="container">
        <div className="row d-flex align-items-stretch no-gutters">
          <div className="col-md-6 p-5 order-md-last">
            <h2 className="h4 mb-5 font-weight-bold">Contact Us</h2>
            <form action="/">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
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
