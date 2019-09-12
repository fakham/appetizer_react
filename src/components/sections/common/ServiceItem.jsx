import React from "react";

const ServiceItem = props => {
  return (
    <div className="col-md-4 d-flex align-self-stretch text-center">
      <div className="media block-6 services d-block">
        <div className="icon d-flex justify-content-center align-items-center">
          <span className={props.icon}></span>
        </div>
        <div className="media-body p-2 mt-3">
          <h3 className="heading">{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
