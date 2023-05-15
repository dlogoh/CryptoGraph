import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setOpen,
  setStats,
  openFavorites,
  closeFavorites,
} from "../features/SidebarSlice";

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

  const handleCoins = () => {
    dispatch(setOpen(true));
  };

  const handleStats = () => {
    dispatch(setStats(true));
  };

  const handleFavorites = () => {
    dispatch(setOpen(true));
    dispatch(openFavorites(true));
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
          <a
            to='/'
            className='menu-link'
            onClick={() => {
              handleClick();
              handleCoins();
            }}
          >
            Coins
          </a>
        </li>
        <li>
          <a
            to='/'
            className='menu-link'
            onClick={() => {
              handleClick();
              handleStats();
            }}
          >
            Stats
          </a>
        </li>
        <li>
          <a
            to='/'
            className='menu-link'
            onClick={() => {
              handleClick();
              handleFavorites();
            }}
          >
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
