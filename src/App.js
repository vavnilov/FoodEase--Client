import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar'
import Welcome from './Welcome'
import Login from './Login'
import SignUpForm from './SignUpForm'
import SearchRestaurants from './SearchRestaurants'
import LeaveReview from './LeaveReview'
import Reviews from './Reviews'
import Follow from './Follow'

import { connect } from 'react-redux'
import { loginUser } from './redux/actions'
import { logoutUser } from './redux/actions'

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    if (token) {
      this.props.loginUser(token)
      fetch("http://localhost:3000/current_user", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${token}`
        }
      })
        .then(resp => resp.json())
    }
  }

  setUser = user => {
    console.log(user);
    this.props.loginUser(user.jwt)
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.props.logoutUser()
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar handleLogout={this.handleLogout}/>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" render={(props) =><Login setUser={this.setUser}/>} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/search" component={SearchRestaurants} />
            <Route exact path="/review/:id" component={LeaveReview}/>} />
            <Route exact path="/reviews" component={Reviews}/>} />
            <Route exact path="/follow" component={Follow}/>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(loginUser(user)),
    logoutUser: dispatch(logoutUser)
  }
}

export default connect(null, mapDispatchToProps)(App);
