import React from 'react'
import "./UpcomingEvents.css"
import upcomingRobotImage from "./assets/upcomingRobotImage.png";
import eventImage from "./assets/event.png"

const UpcomingEvents = () => {
    return (
      <div className="upcoming-events-container">
        <div className="upcoming-events">
          <div className="heading">
            <h1>Past Events</h1>
          </div>
          <div className="upcoming-events-content">
            <div className="upcoming-events-image-details">
              <div className="event-details">
                <a target="_blank" href="https://dare2compete.com/workshop/future-of-transportation-workshop-tantrafiesta-2021-indian-institute-of-information-technology-iiit-nagpur-224276">
                  <img src={eventImage} alt="" />
                </a>
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
