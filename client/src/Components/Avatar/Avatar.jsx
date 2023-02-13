import React from 'react'
import avatar from '../../Helper/avatar.png'
import './Avatar.css'

const Avatar = () => {
  return (
    <div className='avatar-main'>
        <img src={avatar} alt="" />
    </div>
  )
}

export default Avatar