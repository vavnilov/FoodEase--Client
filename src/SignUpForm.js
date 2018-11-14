import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { Redirect, withRouter } from 'react-router-dom'

class SignUpForm extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    error: false,
    error_messages: []
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
    // .then(this.props.history.push('/login'))
    .then (resp => resp.json())
    // .then(console.log)
    .then(resp => {
      if (resp.errors){
        this.setState({error: true, error_messages: resp.errors})
      }
      else{
        // this.props.history.push('/login')
        localStorage.setItem("jwt", resp.jwt);
        this.props.setUser(resp.jwt)
        this.props.history.push('/')
      }
    })
  }

  render() {
    if (this.props.currentUser) {
      return <Redirect to='/' />
    }
    return (
      <div style={{'padding-top': '5%', 'padding-left':'30%', 'padding-right':'30%'}}>
        {this.state.error && this.state.error_messages.map(error => <li style={{color:"red"}}>{error}</li>)}
        <h3 style={{'margin-bottom':60}}>Please submit the following information:</h3>
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

export default withRouter(SignUpForm);
