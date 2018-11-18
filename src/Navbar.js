import React, { Component } from 'react';
import { connect} from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Button, Icon } from 'semantic-ui-react'

const Navbar = (props) => {
  return (
     <Menu inverted size="massive">
      <Menu.Item><NavLink exact to="/"  activeStyle={{color:"red"}}><Icon name='home' />FoodEase</NavLink></Menu.Item>
      <Menu.Item><NavLink exact to="/search" activeStyle={{color:"red"}}>Leave Review</NavLink></Menu.Item>
      <Menu.Item><NavLink exact to="/reviews" activeStyle={{color:"red"}}>See Reviews</NavLink></Menu.Item>
      <Menu.Item><NavLink exact to="/follow" activeStyle={{color:"red"}}>Find FoodEasers</NavLink></Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>{props.currentUser ? <NavLink to="/" onClick={props.handleLogout}>Logout</NavLink> : <NavLink to="/login">Login</NavLink>}</Menu.Item>&nbsp;&nbsp;&nbsp;
        {!props.currentUser && <Menu.Item><NavLink to="/signup">Sign Up</NavLink></Menu.Item>}
      </Menu.Menu>
    </Menu>)
};

const mapStateToProps = state => {
  return { currentUser: state.currentUser}
}

export default withRouter(connect(mapStateToProps)(Navbar));
