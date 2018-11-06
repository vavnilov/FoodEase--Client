import React from 'react'

const User = ({name, username}) => {
  return (
    <div>
      {name} <br />
      {username} <br />
      <button>Follow</button>
    </div>
  )
}

export default User
