import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ currentPath }) => {
  return (
    <div className="navbar">
        <NavLink to="/">Home</NavLink>
        {currentPath !== "/apod" && <NavLink to="/apod">Astronomy Pic of the Day</NavLink>}
        {currentPath !== "/asteroids" && <NavLink to="/asteroids">Today's Asteroids</NavLink>}
    </div>
  );
};

export default NavBar;