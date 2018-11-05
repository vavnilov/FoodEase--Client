import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import User from './User';

class Follow extends Component {

  state = {
    name: "",
    filteredUsers: []
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(res => this.listUsers(res))
  }

  listUsers = users => {
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(this.state.name.toLowerCase()) || user.username.toLowerCase().includes(this.state.name.toLowerCase()))
    this.setState({filteredUsers})
  }


  render() {
    const users = this.state.filteredUsers.map(user => <User key={user.id} {...user}/>)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search User" onChange={this.handleChange} /><br />
          <input type="submit" value="Search"/>
        </form>
        {users}
      </div>
    );
  }

}


export default Follow;
