import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button, Icon, Card, Image } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { connect} from 'react-redux';

const API_KEY = process.env.REACT_APP_ZOMATO_API_KEY;

class SearchRestaurants extends Component {

  state = {
    name: "",
    restaurants: []
  }

  componentDidMount() {
    this.fetchRestaurants()
  }

  handleChange = event => {
    this.setState({
      isLoading: true,
      name: event.target.value
    })
  }

  fetchRestaurants = () => {
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&q=${this.state.name}`, {
      headers: {
            "Content-Type": "application/json; charset=utf-8",
            "user-key": API_KEY
    }})
    .then(res => res.json())
    .then(res => this.setState({restaurants: res.restaurants, name: ''}))
  }


  render() {
    if (!localStorage.jwt) {
      return <Redirect to='/login' />
    }
    return (
      <div style={{margin:20}}>
        <Form onSubmit={this.fetchRestaurants} >
          <Input size="huge" placeholder='Search any restaurant...' onChange={this.handleChange} value={this.state.name}></Input>
          <Button size="huge" icon >
            <Icon name='search' />
          </Button>
        </Form> <br />
      <Card.Group itemsPerRow={2}>
        {this.state.restaurants.length > 0 ? this.state.restaurants.map( restaurant => (

            <Card key={restaurant.restaurant.id}>
              <NavLink to={{pathname:`/review/${restaurant.restaurant.id}`, state: restaurant.restaurant}} >
                {restaurant.restaurant.featured_image ? <Image src={`${restaurant.restaurant.featured_image}`} /> : <Image src='https://www.sunset.com/wp-content/uploads/e3fa7d1e703dab48169dbe4f815a1745-1200x600-c-default.jpg'  />}
                <h2>{restaurant.restaurant.name}</h2>
                <h3>{restaurant.restaurant.location.address}</h3><br />
              </NavLink>
            </Card>
        )) : <p>No restaurants match your search criteria. Please try again.</p>}
      </Card.Group>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return { currentUser: state.currentUser}
}

export default connect(mapStateToProps)(SearchRestaurants);
