import React from 'react'

// importing the logo
import image from './assets/logo.png'

import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='nav-container'> 
            <img className='logo' src={image} alt="img" />
            <div className="nav-text">
                <div className="home">
                    <h1>Home</h1>
                </div>
                <div className="about">
                    <h1>About Us</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar
