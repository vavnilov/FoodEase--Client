import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1>FoodEase</h1>
      <NavLink exact to="/">Homepage</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/search">Leave Review</NavLink>
      <NavLink to="/reviews">See Reviews</NavLink>
      <NavLink to="/follow">Find FoodEasers</NavLink>
  </header>
);

export default Navbar;
