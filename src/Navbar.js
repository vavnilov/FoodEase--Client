import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1>FoodEase</h1>
      <NavLink exact to="/">Homepage</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/signup">Sign Up</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/search">Leave Review</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/reviews">See Reviews</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/follow">Find FoodEasers</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/login">Login</NavLink>&nbsp;&nbsp;&nbsp;
  </header>
);

export default Navbar;
