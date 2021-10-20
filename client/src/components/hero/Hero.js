import React from 'react'

// importing the bg
import bg from './assets/Asset6.png'

import logo from './assets/logo.png'

import "./Hero.css"

const Hero = () => {
    return (
        <div className='hero-container'>
            <img className='bg' src={bg} alt="" />
            <img className='head-logo' src={logo} alt="" />
            <div className="hero-text">
                <h1>Streamlining Your Iot Needs</h1>
            </div>
        </div>
    )
}

export default Hero
