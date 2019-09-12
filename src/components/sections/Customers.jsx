import React from "react";
import bg5 from "../../assets/images/bg_5.jpg";
import person1 from "../../assets/images/person_1.jpg";
import person2 from "../../assets/images/person_2.jpg";
import person3 from "../../assets/images/person_3.jpg";
import person4 from "../../assets/images/person_4.jpg";
import OwlCarousel from "react-owl-carousel";
import CustomerItem from "./common/CustomerItem";

const customers = [
  {
    name: "Jason McClean",
    position: "Customer",
    img: person1,
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    name: "Mark Stevenson",
    position: "Customer",
    img: person2,
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    name: "Art Leonard",
    position: "Customer",
    img: person3,
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    name: "Rose Henderson",
    position: "Customer",
    img: person4,
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    name: "Ian Boner",
    position: "Customer",
    img: person3,
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  }
];

const Customers = () => {
  return (
    <section
      className="ftco-section testimony-section img"
      style={{ backgroundImage: `url(${bg5})` }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ">
            <span className="subheading">Testimony</span>
            <h2 className="mb-4">Happy Customer</h2>
          </div>
        </div>
        <div className="row  justify-content-center">
          <div className="col-md-12">
            <OwlCarousel
              className="carousel-testimony owl-carousel ftco-owl"
              items={3}
              loop
            >
              {customers.map((item, index) => (
                <CustomerItem key={index} {...item} />
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
