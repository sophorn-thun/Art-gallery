import React from 'react';
import logo from '../assets/logo.png';

function NavBar() {
  return (
    <div className="navbar">
      <img src={logo}></img>
      <text className="navbar-text">Navbar</text>
    </div>
  );
}

export default NavBar;
