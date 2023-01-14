import React from 'react';
import { NavLink } from 'react-router-dom';
import planetImg from '../../assets/images/planet.png';

import './Navbar.css';

const Navbar = () => (

  <nav>
    <header className="main-link" to="/">
      <img src={planetImg} alt="PalnetImage." />
      <h1>Space Travelers Hub</h1>
    </header>

    <div className="links">
      <NavLink className="link" to="/">Rocket</NavLink>
      <NavLink className="link" to="/mission">Mission</NavLink>
      {' '}
      |
      <NavLink className="link" to="/profile">My Profile</NavLink>
    </div>
  </nav>

);

export default Navbar;
