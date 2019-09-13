import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Appetizer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li
              className={props.page === "Home" ? "nav-item active" : "nav-item"}
            >
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className={
                props.page === "About" ? "nav-item active" : "nav-item"
              }
            >
              <Link to="/about/" className="nav-link">
                About
              </Link>
            </li>
            <li
              className={props.page === "Menu" ? "nav-item active" : "nav-item"}
            >
              <Link to="/menu/" className="nav-link">
                Menu
              </Link>
            </li>
            <li
              className={props.page === "Blog" ? "nav-item active" : "nav-item"}
            >
              <Link to="/blog/" className="nav-link">
                Blog
              </Link>
            </li>
            <li
              className={
                props.page === "Contact" ? "nav-item active" : "nav-item"
              }
            >
              <Link to="/Contact/" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item cta">
              <Link to="/reservation/" className="nav-link">
                Book a table
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
