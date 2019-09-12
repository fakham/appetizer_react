import React from "react";
import ServiceItem from "./common/ServiceItem";

const services = [
  {
    title: "Birthday Party",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    icon: "flaticon-cake"
  },
  {
    title: "Business Meetings",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    icon: "flaticon-meeting"
  },
  {
    title: "Wedding Party",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    icon: "flaticon-tray"
  }
];

const Services = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Services</span>
            <h2 className="mb-4">Catering Services</h2>
          </div>
        </div>
        <div className="row">
          {services.map((item, index) => (
            <ServiceItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
