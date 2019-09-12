import React from "react";

const ChefItem = props => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="staff">
        <div
          className="img"
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
        <div className="text pt-4">
          <h3>{props.name}</h3>
          <span className="position mb-2">{props.position}</span>
          <p>{props.description}</p>
          <div className="faded">
            <ul className="ftco-social d-flex">
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
                  <span className="icon-google-plus"></span>
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
      </div>
    </div>
  );
};

export default ChefItem;
