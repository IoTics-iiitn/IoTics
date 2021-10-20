import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// importing the logo
import image from './assets/logo.png'

import "./Navbar.css"

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)
    const [show, setShow] = useState(false);

    const changeNavbar = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar)

    return (
        <div className={navbar ? 'nav-container scroll' : 'nav-container'}>
            <div
                onClick={() => setShow((prevState) => !prevState)}
                className={`${show ? "hamburger-btn open" : "hamburger-btn"}`}
            >
                <div className="hamburger"></div>
            </div>

            <img className={navbar ? 'logo scroll-logo' : 'logo'} src={image} alt="img" />
            <div className={`${show ? "nav-menu" : "nav-menu hide"}`}>
                <div className="nav-text">
                    <NavLink exact to="/" className={isActive => "active" + (!isActive ? " unselected" : "")}>
                        <div className="home">
                            <h1>Home</h1>
                        </div>
                    </NavLink>
                    <NavLink to="/about-us" className={isActive => "active" + (!isActive ? " unselected" : "")}>
                        <div className="about">
                            <h1>About Us</h1>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
