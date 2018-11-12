import React, { Component } from 'react'
import { withRouter, Redirect, NavLink } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

class Login extends Component{
  state={
    error: false,
    username: "",
    password: ""
  }

  login = (username, password) => {
    fetch("http://localhost:3000/auth",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => res.json())
    .then(resp => {
      if (resp.error){
        this.setState({username:'', password:'', error: true})
      }
      else{
        localStorage.setItem("jwt", resp.jwt);
        this.props.setUser(resp.jwt)
        this.props.history.push('/')
      }
    })
  }


  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.login(this.state.username, this.state.password)
  }
  render(){
    if (this.props.currentUser) {
      return <Redirect to='/' />
    }
      return(
        <div style={{'padding-top': '5%', 'padding-left':'30%', 'padding-right':'30%'}}>
          {this.state.error &&
            <div style={{color:"red"}}>Invalid User Information. Please try again </div>
          }<br/>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder='Password' name='password' value={this.state.password}onChange={this.handleChange} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
          <p>Don't have an account? <NavLink to='/signup'>Sign up</NavLink></p>
        </div>
    )

  }
}

export default withRouter(Login)
