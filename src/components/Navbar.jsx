import React from 'react'
import img from '../img/logo2.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <img src={img} alt='logo'
      className='nav-logo' />
      <ul className='nav-links'>
        <li><a href="#home">Home</a></li>
        <li><a href="#graph">Graph</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar