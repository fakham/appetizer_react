import React from "react";
import MealItem from "./MealItem";

const MenuItem = props => {
  return (
    <div className="col-md-6 col-lg-4 menu-wrap">
      <div className="heading-menu text-center">
        <h3>{props.title}</h3>
      </div>
      {props.meals.map((item, index) => (
        <MealItem key={index} {...item} />
      ))}
    </div>
  );
};

export default MenuItem;
