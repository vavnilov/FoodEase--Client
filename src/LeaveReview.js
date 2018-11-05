import React, { Component } from 'react';

class LeaveReview extends Component {
  state= {
    body: '',
    restaurant: this.props.match.params.id,
    restaurant_name: this.props.location.state.name
  }

  handleClick = () => {
    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(this.props.history.push('/'))
  }

  render() {
    return (
      <div>
        Leave a review for {this.state.restaurant_name} <br />
        <textarea onChange={(event) => this.setState({body: event.target.value})}/>
        <button onClick={this.handleClick}>Submit Review </button>
      </div>
    );
  }

}

export default LeaveReview;
