import React, { Component } from 'react';
import {Form, Button, Input, Icon} from 'semantic-ui-react'
import User from './User';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

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
    .filter(user => user.id !== this.props.currentUser.id)
    this.setState({filteredUsers})
  }


  render() {
    if (!this.props.currentUser) {
      return <Redirect to='/login' />
    }
    const users = this.state.filteredUsers.map(user => <User key={user.id} {...user}/>)
    return (
      <div>
        <Form onSubmit={this.handleSubmit} >
          <Input size="huge" placeholder='Search for FoodEasers...' onChange={this.handleChange}></Input>
          <Button size="huge" icon >
            <Icon name='search' />
          </Button>
        </Form> <br />
        {users}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return { currentUser: state.currentUser}
}


export default connect(mapStateToProps)(Follow);
