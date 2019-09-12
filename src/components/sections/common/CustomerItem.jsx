import React from "react";

const CustomerItem = props => {
  return (
    <div className="item">
      <div className="testimony-wrap text-center pb-5">
        <div
          className="user-img mb-4"
          style={{ backgroundImage: `url(${props.img})` }}
        >
          <span className="quote d-flex align-items-center justify-content-center">
            <i className="icon-quote-left"></i>
          </span>
        </div>
        <div className="text p-3">
          <p className="mb-4">{props.description}</p>
          <p className="name">{props.name}</p>
          <span className="position">{props.position}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerItem;
