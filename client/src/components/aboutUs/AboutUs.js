import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <div>
            <div className='ABOUT-container'>
                 <div className="textAbout">
                 <p >About Us</p>
                 </div>
                 <div className="textaboutt">
                     <p className="content">IoTics Club, the official student community of the IIIT Nagpur for IoT and Robotics enthusiasts where we strive to learn and hone our skills, developing optimized solutions alongside the ever-growing demands of a more interconnected future. </p>
                 </div>
                 <a><button className="aboutbtn">About Our Team</button></a>
                 </div>
        </div>
    )
}

export default AboutUs
