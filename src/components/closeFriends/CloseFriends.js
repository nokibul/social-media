import React from 'react'
import './closefriends.css';


const CloseFriends = ({user}) => {
  return (
    <li className='sidebarFriend'>
        <img alt='' className='sidebarFriendImage' src={user.profilePicture} />
        <span className='sidebarFriendName'>{user.username}</span>
    </li>
  )
}

export default CloseFriends