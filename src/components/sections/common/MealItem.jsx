import React from "react";

const MealItem = props => {
  return (
    <div className="menus d-flex">
      <div
        className="menu-img img"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <div className="text">
        <div className="d-flex">
          <div className="one-half">
            <h3>{props.name}</h3>
          </div>
          <div className="one-forth">
            <span className="price">${props.price}</span>
          </div>
        </div>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default MealItem;
