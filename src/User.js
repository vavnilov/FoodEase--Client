import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow } from './redux/actions'

const handleFollowClick = (follow, id) => {
  follow(id)
  fetch("http://localhost:3000/relationships",{
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
  fetch("http://localhost:3000/unfollow",{
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
    <div>
      {name} <br />
      {username} <br />
    {followed.includes(id) ? <button onClick={() => handleUnfollowClick(unfollow, id)}>Unfollow</button> : <button onClick={() => handleFollowClick(follow, id)}>Follow</button>}
    </div>
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
