import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header id="header">
      <nav>
        <ul>
          {["home", "reviews", "dashboard", "blogs"].map((link, ind) => (
            <MenuLinks key={link + ind} name={link} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

const MenuLinks = ({ name }) => {
  return (
    <li>
      <NavLink to={name === "home" ? "/" : "/" + name}>{name}</NavLink>
    </li>
  );
};

export default Header;
