import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import planetImg from '../../assets/images/planet.png';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <Link to="/" className="logo">
      <img src={planetImg} alt="PalnetImage." />
      <p className="logo-text">Space Travelers Hub</p>
    </Link>
    <div className="links">
      <NavLink className="link" to="/rocket">Rocket</NavLink>
      <NavLink className="link" to="/mission">Mission</NavLink>
      <NavLink className="link" to="/profile">My Profile</NavLink>
    </div>
  </nav>
);

export default Navbar;
