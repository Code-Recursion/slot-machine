import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <h1>Menu</h1>
      <NavLink
        activeClassName="active_class"
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        activeClassName="active_class"
        to="/about"
      >
        About
      </NavLink>
      <br />
      <br />
    </>
  );
};

export default Menu;
