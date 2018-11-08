import React from 'react';
import { connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  console.log(props.followed);
  return (<header>
    <h1>FoodEase</h1>
      <NavLink exact to="/">Homepage</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/signup">Sign Up</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/search">Leave Review</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/reviews">See Reviews</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/follow">Find FoodEasers</NavLink>&nbsp;&nbsp;&nbsp;
      {localStorage.jwt ? <NavLink to="/" onClick={props.handleLogout}>Logout</NavLink> : <NavLink to="/login">Login</NavLink>}
  </header>)
};

const mapStateToProps = state => {
  return { currentUser: state.currentUser, followed:state.usersFollowing}
}

export default connect(mapStateToProps)(Navbar);
