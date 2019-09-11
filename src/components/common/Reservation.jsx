import React from "react";

const Reservation = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb">
      <div className="container-fluid px-0">
        <div className="row d-flex no-gutters">
          <div className="col-md-6 makereservation p-4 p-md-5 pt-5 pt-md-0">
            <div className="heading-section mb-5">
              <span className="subheading">Book a table</span>
              <h2 className="mb-4">Make Reservation</h2>
            </div>
            <form action="/">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="book_date"
                      placeholder="Date"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Time</label>
                    <input
                      type="text"
                      className="form-control"
                      id="book_time"
                      placeholder="Time"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Person</label>
                    <div className="select-wrap one-third">
                      <div className="icon">
                        <span className="ion-ios-arrow-down"></span>
                      </div>
                      <select name="" id="" className="form-control">
                        <option value="">Person</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4+</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Make a Reservation"
                      className="btn btn-primary py-3 px-5"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex align-items-stretch pb-5 pb-md-0">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
