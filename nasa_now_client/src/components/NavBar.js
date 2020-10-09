import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to='/logout'>Logout</NavLink>
      <NavLink to="/apod">Astronomy Pic of the Day</NavLink>
      <NavLink to="/asteroids">Discover Asteroids</NavLink>
    </div>
  );
};

export default NavBar;