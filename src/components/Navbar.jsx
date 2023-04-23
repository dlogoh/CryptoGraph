import { useState } from "react";

import logo from "../img/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState("closed");
  const [navToggle, setNavToggle] = useState("no-toggle");

  const handleClick = (e) => {
    setOpen("closed");
    setNavToggle("no-toggle");
  };

  const eatHamburger = () => {
    if (open === "open") {
      setOpen("closed");
      setNavToggle("no-toggle");
    } else {
      setOpen("open");
      setNavToggle("nav-toggle");
    }
  };

  return (
    <nav>
      <div className='nav-container'>
        <img src={logo} alt='Code Card Logo' />
        <h2>CryptoGraph</h2>
      </div>
      <ul className='nav-links'>
        <li>
          <a href='/'>Home</a>
        </li>
      </ul>
      <ul id='menu' className={`menu ${navToggle}`}>
        <li>
          <a to='/' className='menu-link' onClick={handleClick}>
            Home
          </a>
        </li>
        <li>
          <a to='/' className='menu-link' onClick={handleClick}>
            Sign Up
          </a>
        </li>
        <li>
          <a to='/' className='menu-link' onClick={handleClick}>
            Log In
          </a>
        </li>
        <li>
          <a to='/' className='menu-link' onClick={handleClick}>
            Contact
          </a>
        </li>
      </ul>
      {/* Hamburger icon */}
      <button
        id='menu-btn'
        className={`hamburger ${open}`}
        aria-label='Hamburger Menu'
        onClick={eatHamburger}
      >
        <span className='hamburger-top'></span>
        <span className='hamburger-middle'></span>
        <span className='hamburger-bottom'></span>
      </button>
    </nav>
  );
};

export default Navbar;
