import React, { Component } from 'react';
import Review from './Review'
import moment from 'moment'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Reviews extends Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    fetch('https://foodease101-backend.herokuapp.com/reviews')
    .then(res => res.json())
    .then(res => this.setState({reviews: res}))

  }

  render() {
    if (!localStorage.jwt) {
      return <Redirect to='/login' />
    }
    const reviews = this.state.reviews
      .filter(review => this.props.currentUser.id === review.user_id || this.props.followed.includes(review.user_id))
      .sort((a,b) => moment(b.created_at).unix() - moment(a.created_at).unix())
      .map(review => <Review key={review.id} {...review}/>)
    return (
      <h1>
        { !!reviews.length ? "Here are all the reviews from your fellow FoodEasers" : "Nothing to show here. Try following some more FoodEasers."}
        {reviews}
      </h1>
    );
  }

}

const mapStateToProps = state => {
  return { currentUser: state.currentUser, followed: state.usersFollowing}
}

export default connect(mapStateToProps)(Reviews);
