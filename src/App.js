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

class App extends Component {

  state = {
    auth: { currentUser: {} },
    newUser: {
      username: "",
      password: ""
    }
  };

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    if (token) {
      fetch("http://localhost:3000/current_user", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token
        }
      })
        .then(resp => resp.json())
        .then(user => {
          const currentUser = { currentUser: user };
          this.setState({ auth: currentUser });
        });
    }
  }

  handleLogin = resp => {
    const currentUser = { currentUser: resp };
    console.log(currentUser);
    localStorage.setItem("jwt", resp.jwt);
    this.setState({ auth: currentUser });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" render={(props) =><Login handleLogin={this.handleLogin}/>} />
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

export default App;
