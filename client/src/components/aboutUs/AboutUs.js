import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {
    return (
      <div className="about-us-container">
        <div className="about-us">
          <div className="heading">
            <h1>About us</h1>
          </div>
          <div className="about-content">
            <div className="about-para">
              <p>
                IoTics Club, the official student community of the IIIT Nagpur
                for IoT and Robotics enthusiasts where we strive to learn and
                hone our skills, developing optimized solutions alongside the
                ever-growing demands of a more interconnected future.{" "}
              </p>
            </div>
            <div className="about-btn">
              <button>About Our Team</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutUs
