import React from 'react';
import { connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Menu, Button, Icon } from 'semantic-ui-react'

const Navbar = (props) => {
  console.log(props.followed);
  return (
     <Menu inverted size="massive">
      <Menu.Item><NavLink exact to="/"><Icon name='home' />FoodEase</NavLink></Menu.Item>&nbsp;&nbsp;&nbsp;
      <Menu.Item><NavLink to="/search">Leave Review</NavLink></Menu.Item>&nbsp;&nbsp;&nbsp;
      <Menu.Item><NavLink to="/reviews">See Reviews</NavLink></Menu.Item>&nbsp;&nbsp;&nbsp;
      <Menu.Item><NavLink to="/follow">Find FoodEasers</NavLink></Menu.Item>&nbsp;&nbsp;&nbsp;
      <Menu.Menu position="right">
        <Menu.Item>{localStorage.jwt ? <NavLink to="/" onClick={props.handleLogout}>Logout</NavLink> : <NavLink to="/login">Login</NavLink>}</Menu.Item>&nbsp;&nbsp;&nbsp;
        {!localStorage.jwt && <Menu.Item><NavLink to="/signup">Sign Up</NavLink></Menu.Item>}
      </Menu.Menu>
    </Menu>)
};

const mapStateToProps = state => {
  return { currentUser: state.currentUser, followed:state.usersFollowing}
}

export default connect(mapStateToProps)(Navbar);
