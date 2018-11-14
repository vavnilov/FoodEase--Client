import React, { Component } from 'react';
import {Form, Button, Input, Icon} from 'semantic-ui-react'
import User from './User';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Follow extends Component {

  state = {
    name: "",
    users: []
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }
  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(res => this.setState({users: res}))
  }

  render() {
    if (!localStorage.jwt) {
      return <Redirect to='/login' />
    }
    const users = this.state.users
      .filter(user => user.name.toLowerCase().includes(this.state.name.toLowerCase()) || user.username.toLowerCase().includes(this.state.name.toLowerCase()))
      .filter(user => user.id !== this.props.currentUser.id)
      .map(user => <User key={user.id} {...user}/>)
    return (
      <div>
        <Input icon="search" size="huge" placeholder='Search for FoodEasers...' onChange={this.handleChange}></Input>
        <br />
        {users}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return { currentUser: state.currentUser}
}


export default connect(mapStateToProps)(Follow);
