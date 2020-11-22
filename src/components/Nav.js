import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../res/covid-logo.png"
const Navbar = () => {
  return (<>
    <div
      className="container-fluid bg-white nav_bar fixed-top"
      id="about-1"
    > 
      <div className="row">
        <div className="col-11  mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <NavLink
              className="navbar-brand"
              to="/"
            >   
              <img src={logo}/>
            </NavLink>
            
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item pr-3">
                  <NavLink
                    exact
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item pr-3">
                  <NavLink
                    exact
                    className="nav-link"
                    to="/healthy"
                  >
                    How to Stay Fit?
                  </NavLink>
                </li>
                <li className="nav-item pr-3">
                  <NavLink
                    exact
                    className="nav-link"
                    to="/symptoms"
                  >
                    Symptoms
                  </NavLink>
                </li>
                <li className="nav-item pr-3">
                  <NavLink
                    className="nav-link"
                    to="/active-cases"
                  >
                   Active Cases
                  </NavLink>
                </li>
                <li className="nav-item pr-3 pb-2">
                  <NavLink
                    exact
                    className="nav-link btn_hire_me"
                    to="/contact"
                  >
                      Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div className="container pb-5 pt-5" id="about1"></div></>
  );
};
export default Navbar;