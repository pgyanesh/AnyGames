import React from "react";
import gamingconsole from "./gamingconsole.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img className="navbar-img" src={gamingconsole} alt=" " />
        <h1><strong>AnyGames</strong></h1>
      </div>
      <div className="navbar-login">
        <a href="/">login</a>
      </div>
    </div>
  );
};

export default Navbar;
