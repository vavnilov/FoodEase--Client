import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar'
import Welcome from './Welcome'
import SignUpForm from './SignUpForm'
import SearchRestaurants from './SearchRestaurants'
import LeaveReview from './LeaveReview'
import Reviews from './Reviews'
import Follow from './Follow'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Welcome} />
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
