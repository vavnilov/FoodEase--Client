import React, { Component } from 'react';
import Review from './Review'

import { connect } from 'react-redux'

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
    const reviews = this.state.reviews.filter(review => this.props.followed.includes(review.user_id)).map(review => <Review key={review.id} {...review}/>)
    // debugger;
    return (
      <div>Here's all the reviews!
        {reviews}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {followed: state.usersFollowing}
}

export default connect(mapStateToProps)(Reviews);
