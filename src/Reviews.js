import React, { Component } from 'react';
import Review from './Review'
class Reviews extends Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/reviews')
    .then(res => res.json())
    .then(res => this.setState({reviews: res}))
  }

  render() {
    const reviews = this.state.reviews.map(review => <Review key={review.id} {...review}/>)
    return (
      <div>Here's all the reviews!
        {reviews}
      </div>
    );
  }

}

export default Reviews;

// .then(res => res.map(review => (
//   <div>
//     {review.user_id} <br />
//     {review.restaurant} <br />
//     {review.body} <br />
//   </div>)))
