import React from "react";

const InfoItem = props => {
  return (
    <div className="col-md d-flex justify-content-center counter-wrap ">
      <div className="block-18">
        <div className="text">
          <strong className="number" data-number="15000">
            {props.data}
          </strong>
          <span>{props.title}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
