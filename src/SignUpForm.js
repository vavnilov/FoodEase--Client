import React, { Component } from 'react';

class SignUpForm extends Component {
  state = {
    name: "",
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange} /><br />
          <label>Username</label>
          <input type="text" name="username" onChange={this.handleChange} /><br />
          <label>Password</label>
          <input type="password" name="password" onChange={this.handleChange} /><br />
          <input type="submit" />
        </form>
      </div>
    );
  }

}

export default SignUpForm;
