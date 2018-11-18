import React, { Component, Fragment } from 'react';
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
import { setFollowed } from './redux/actions'

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    if (token) {
      this.setUser(token)
    }
  }

  setUser = token => {
    fetch("https://foodease101-backend.herokuapp.com/current_user", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${token}`
      }
    })
      .then(resp => resp.json())
      .then(resp => {
        this.props.loginUser(resp)
        this.fetchRelationships(resp)
      })
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.props.logoutUser()
  }

  fetchRelationships = user => {
    let followed;
    fetch("https://foodease101-backend.herokuapp.com/relationships")
    .then(resp => resp.json())
    .then(resp => followed = resp.filter(rel => rel.follower_id === user.id).map(rel => rel.followed_id))
    .then(followed => this.props.setFollowed(followed))
  }

  render() {
    return (
      <Router>
        <Fragment >
          <Navbar handleLogout={this.handleLogout}/>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" render={(props) =><Login setUser={this.setUser}/>} />
            <Route exact path="/signup" render={(props) =><SignUpForm setUser={this.setUser} />}/>
            <Route exact path="/search" component={SearchRestaurants} />
            <Route exact path="/review/:id" component={LeaveReview}/>} />
            <Route exact path="/reviews" component={Reviews}/>} />
            <Route exact path="/follow" component={Follow}/>} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(loginUser(user)),
    logoutUser: dispatch(logoutUser),
    setFollowed: followed => dispatch(setFollowed(followed))
  }
}

export default connect(null, mapDispatchToProps)(App);
