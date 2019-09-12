import React from "react";
import MenuItem from "./common/MenuItem";
import breakfast1 from "../../assets/images/breakfast-1.jpg";
import breakfast2 from "../../assets/images/breakfast-2.jpg";
import breakfast3 from "../../assets/images/breakfast-3.jpg";
import lunch1 from "../../assets/images/lunch-1.jpg";
import lunch2 from "../../assets/images/lunch-2.jpg";
import lunch3 from "../../assets/images/lunch-3.jpg";
import dinner1 from "../../assets/images/dinner-1.jpg";
import dinner2 from "../../assets/images/dinner-2.jpg";
import dinner3 from "../../assets/images/dinner-3.jpg";
import dessert1 from "../../assets/images/dessert-1.jpg";
import dessert2 from "../../assets/images/dessert-2.jpg";
import dessert3 from "../../assets/images/dessert-3.jpg";
import wine1 from "../../assets/images/wine-1.jpg";
import wine2 from "../../assets/images/wine-2.jpg";
import wine3 from "../../assets/images/wine-3.jpg";
import drink1 from "../../assets/images/drink-1.jpg";
import drink2 from "../../assets/images/drink-2.jpg";
import drink3 from "../../assets/images/drink-3.jpg";

const menus = [
  {
    title: "Breakfast",
    meals: [
      {
        name: "Grilled Beef with potatoes",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: breakfast1
      },
      {
        name: "Grilled Crab with Onion",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: breakfast2
      },
      {
        name: "Grilled Crab with Onion",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: breakfast3
      }
    ]
  },
  {
    title: "Lunch",
    meals: [
      {
        name: "Grilled Beef with potatoes",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: lunch1
      },
      {
        name: "Grilled Crab with Onion",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: lunch2
      },
      {
        name: "Grilled Crab with Onion",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: lunch3
      }
    ]
  },
  {
    title: "Dinner",
    meals: [
      {
        name: "Grilled Beef with potatoes",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: dinner1
      },
      {
        name: "Grilled Crab with Onion",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: dinner2
      },
      {
        name: "Grilled Crab with Onion",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: dinner3
      }
    ]
  },
  {
    title: "Desserts",
    meals: [
      {
        name: "Grilled Beef with potatoes",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: dessert1
      },
      {
        name: "Grilled Crab with Onion",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: dessert2
      },
      {
        name: "Grilled Crab with Onion",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: dessert3
      }
    ]
  },
  {
    title: "Wine Card",
    meals: [
      {
        name: "Grilled Beef with potatoes",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: wine1
      },
      {
        name: "Grilled Crab with Onion",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: wine2
      },
      {
        name: "Grilled Crab with Onion",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: wine3
      }
    ]
  },
  {
    title: "Drinks",
    meals: [
      {
        name: "Grilled Beef with potatoes",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: drink1
      },
      {
        name: "Grilled Crab with Onion",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: drink2
      },
      {
        name: "Grilled Crab with Onion",
        price: 29,
        content: "Meat, Potatoes, Rice, Tomatoe",
        img: drink3
      }
    ]
  }
];

const Menu = () => {
  return (
    <section className="ftco-section">
      <div className="container-fluid px-4">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Specialties</span>
            <h2 className="mb-4">Our Menu</h2>
          </div>
        </div>
        <div className="row">
          {menus.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
