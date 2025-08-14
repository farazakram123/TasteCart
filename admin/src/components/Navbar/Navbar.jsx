import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="admin-logo">
            <h1>TasteCart</h1>
            <p>Admin Portal</p>
        </div>
        <div className="profile">
            <img src={assets.profile_image} />
        </div>
    </div>
  )
}

export default Navbar
