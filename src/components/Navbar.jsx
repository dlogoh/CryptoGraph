import React from "react";
import img from "../img/logo2.png";
import gecko from "../img/coingecko.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={img} alt="logo" className="nav-logo" />
      <p className="powered-by">
        Powered by:
        <img src={gecko} alt="" />
      </p>
    </nav>
  );
}

export default Navbar;
