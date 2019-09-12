import React from "react";
import chef1 from "../../assets/images/chef-1.jpg";
import chef2 from "../../assets/images/chef-2.jpg";
import chef3 from "../../assets/images/chef-3.jpg";
import chef4 from "../../assets/images/chef-4.jpg";
import ChefItem from "./common/ChefItem";

const chefs = [
  {
    name: "John Smooth",
    position: "Restaurant Owner",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    img: chef4
  },
  {
    name: "Rebeca Welson",
    position: "Head Chef",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    img: chef2
  },
  {
    name: "Kharl Branyt",
    position: "Chef",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    img: chef3
  },
  {
    name: "Luke Simon",
    position: "Chef",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    img: chef1
  }
];

const MasterChef = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Chef</span>
            <h2 className="mb-4">Our Master Chef</h2>
          </div>
        </div>
        <div className="row">
          {chefs.map((item, index) => (
            <ChefItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterChef;
