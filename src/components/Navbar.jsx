import React from "react";
import img from "../img/logo2.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={img} alt="logo" className="nav-logo" />
    </nav>
  );
}

export default Navbar;
