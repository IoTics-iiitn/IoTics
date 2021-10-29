import React from 'react'
import "./AboutUs.css"
import {HashLink} from "react-router-hash-link"

const AboutUs = () => {

    const scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -270;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    };

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
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="/ourTeam#team"
              >
                <button>About Our Team</button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutUs
