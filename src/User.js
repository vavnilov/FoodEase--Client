import React from 'react'

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
const User = ({id, name, username}) => {
  return (
    <div>
      {name} <br />
      {username} <br />
    <button onClick={() => handleFollowClick(id)}>Follow</button>
    </div>
  )
}

export default User
