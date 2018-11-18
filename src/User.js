import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow } from './redux/actions'
import { Segment, Button, Icon } from 'semantic-ui-react'

const handleFollowClick = (follow, id) => {
  follow(id)
  fetch("https://foodease101-backend.herokuapp.com/relationships",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      user: localStorage.jwt,
      followed_id: id
    })
  })
}

const handleUnfollowClick = (unfollow, id) => {
  unfollow(id)
  fetch("https://foodease101-backend.herokuapp.com/unfollow",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      user: localStorage.jwt,
      followed_id: id
    })
  })
}

const User = ({id, name, username, followed, follow, unfollow}) => {
  return (
    <Segment style={{width:'30%'}}>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      {followed.includes(id) ?
        <Button
          basic color='red'
          icon labelPosition='left'
          onClick={() => handleUnfollowClick(unfollow, id)}
          >
          <Icon name='food' color='red'/>
          Unfollow
        </Button> :
        <Button
          basic color='green'
          icon labelPosition='left'
          onClick={() => handleFollowClick(follow, id)}
          >
          <Icon name='food' color='green' />
          Follow
        </Button>}
  </Segment>
  )
}

const mapStateToProps = state => {
  return { currentUser: state.currentUser, followed:state.usersFollowing}
}

const mapDispatchToProps = dispatch => {
  return {
    follow: user => dispatch(follow(user)),
    unfollow: user => dispatch(unfollow(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)
