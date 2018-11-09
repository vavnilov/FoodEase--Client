import React from 'react'
import { connect } from 'react-redux'

const handleFollowClick = id => {
  console.log(id);
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
const User = ({id, name, username, followed}) => {
  return (
    <div>
      {name} <br />
      {username} <br />
    {followed.includes(id) ? <button>Unfollow</button> : <button onClick={() => handleFollowClick(id)}>Follow</button>}
    </div>
  )
}

const mapStateToProps = state => {
  return { followed:state.usersFollowing}
}

export default connect(mapStateToProps)(User)
