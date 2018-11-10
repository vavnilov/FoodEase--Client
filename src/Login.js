import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
        this.setState({error: true})
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
    if (this.state.error){
      alert("Invalid Login Information")
      this.props.history.push('/');
      return null
    }else{
      return(
        <div style={{'padding-top': '5%', 'padding-left':'30%', 'padding-right':'30%'}}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input placeholder='Username' name='username' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password' name='password' onChange={this.handleChange} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </div>
    )
    }
  }
}

export default withRouter(Login)
