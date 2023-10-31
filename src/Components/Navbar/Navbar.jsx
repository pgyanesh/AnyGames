import React from "react";
import gamingconsole from "./gamingconsole.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img className="navbar-img" src={gamingconsole} alt=" " />
        <h1><strong>AnyGames</strong></h1>
      </div>
      <div className="navbar-login">
        <Link to="/login">login</Link>
      </div>
    </div>
  );
};

export default Navbar;
