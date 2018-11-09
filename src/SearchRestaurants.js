import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SearchRestaurants extends Component {

  state = {
    name: "",
    restaurants: []
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&q=${this.state.name}`, {
      headers: {
            "Content-Type": "application/json; charset=utf-8",
            "user-key": '59003495a60ce448262ef01ce0c67c73'
    }})
    .then(res => res.json())
    .then(res => this.setState({restaurants: res.restaurants}))
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search Restaurant" onChange={this.handleChange} /><br />
          <input type="submit" value="Search"/>
        </form>
        {this.state.restaurants.length > 0 && this.state.restaurants.map( restaurant => (
          <div key={restaurant.restaurant.id}>
            <NavLink to={{pathname:`/review/${restaurant.restaurant.id}`, state: restaurant.restaurant}} >{restaurant.restaurant.name}</NavLink>
            <p>{restaurant.restaurant.location.address}</p><br />
          </div>
        ))}
      </div>
    );
  }

}

export default SearchRestaurants;

// onClick={() => this.props.history.push(`/reviews/${restaurant.restaurant.id}`)}
