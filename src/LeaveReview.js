import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, TextArea, Button } from 'semantic-ui-react'
import './LeaveReview.css'

class LeaveReview extends Component {
  state= {
    body: '',
    restaurant: this.props.match.params.id,
    restaurant_name: this.props.location.state.name,
    location: this.props.location.state.location.address,
    cost_for_two: this.props.location.state.average_cost_for_two,
    cuisines: this.props.location.state.cuisines,
    image: this.props.location.state.featured_image,
    price_range: this.props.location.state.price_range
  }

  handleClick = () => {
    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...this.state, current_user: this.props.currentUser})
    }).then(setTimeout(() => this.props.history.push('/reviews'), 500))
  }

  render() {
    return (
      <Form id="form">
        Leave a review for {this.state.restaurant_name} <br /><br />
        <TextArea autoHeight onChange={(event) => this.setState({body: event.target.value})}/><br /><br />
        <Button positive onClick={this.handleClick} disabled={this.state.body===''} >Submit Review </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(LeaveReview)
