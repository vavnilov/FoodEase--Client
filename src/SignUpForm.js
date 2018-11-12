import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
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
    }).then(this.props.history.push('/login'))
  }

  render() {
    return (
      <div style={{'padding-top': '5%', 'padding-left':'30%', 'padding-right':'30%'}}>
        <h2 style={{'margin-bottom':60}}>Please submit the following information:</h2>
        <Form size='big' onSubmit={this.handleSubmit}>
           <Form.Field>
             <label>Name</label>
             <input placeholder='Name' name="name" onChange={this.handleChange} />
           </Form.Field>
           <Form.Field>
             <label>Username</label>
             <input placeholder='Username' name="username" onChange={this.handleChange} />
           </Form.Field>
           <Form.Field>
             <label>Password</label>
             <input type='password' placeholder='Password' name="password" onChange={this.handleChange} />
           </Form.Field>
           <Button type='submit'>Submit</Button>
         </Form>
      </div>
    );
  }

}

export default SignUpForm;
