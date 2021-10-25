import React from 'react'
import "./UpcomingEvents.css"
import upcomingRobotImage from "./assets/upcomingRobotImage.png";
import upcomingTestImage from "./assets/upcomingTestImage1.jpg";
const UpcomingEvents = () => {
    return (
      <div className="upcoming-events-container">
        <div className="upcoming-events">
          <div className="heading">
            <h1>Upcoming Events</h1>
          </div>
          <div className="upcoming-events-content">
            <div className="upcoming-events-image-details">
              <div className="event-details">
              </div>
            </div>
            <div className="upcoming-events-robot">
              <img src={upcomingRobotImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default UpcomingEvents
