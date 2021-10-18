import React from 'react'
import "./UpcomingEvents.css"
import logooo from './assests/Asset 9.png'
const UpcomingEvents = () => {
    return (
        <div>
             <div className='upcoming-container'>
                 <div>
                 <p className="text1">Upcoming Events</p>
                 </div>
                 <div>
                 <div className="container">Events</div>
                 </div>
                 <div className="img-i">
                 <img className='logo2' src={logooo} alt=""/>
                 </div>
            
        </div>
        </div>
    )
}

export default UpcomingEvents
