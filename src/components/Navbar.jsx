import { useState } from "react";
import { useDispatch } from "react-redux";
import { setOpen } from "../features/SidebarSlice";

import logo from "../img/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpenNav] = useState("closed");
  const [navToggle, setNavToggle] = useState("no-toggle");

  // Redux
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setOpenNav("closed");
    setNavToggle("no-toggle");
  };

  const eatHamburger = () => {
    if (open === "open") {
      setOpenNav("closed");
      setNavToggle("no-toggle");
    } else {
      setOpenNav("open");
      setNavToggle("nav-toggle");
    }
  };

  const toggleSidebar = (toggle) => {
    dispatch(setOpen(toggle));
  };

  return (
    <nav>
      <a href='/' className='nav-container'>
        <img src={logo} alt='Code Card Logo' />
        <h2>CryptoGraph</h2>
      </a>
      <ul className='nav-links'>
        <li></li>
      </ul>
      <ul id='menu' className={`menu ${navToggle}`}>
        <li>
          <a to='/' className='menu-link' onClick={toggleSidebar()}>
            Coins
          </a>
        </li>
        <li>
          <a to='/' className='menu-link' onClick={handleClick}>
            Stats
          </a>
        </li>
        <li>
          <a to='/' className='menu-link' onClick={handleClick}>
            Favorites
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
