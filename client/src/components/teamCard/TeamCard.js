import React from 'react'
import "./TeamCard.css"
import aditiYadav from "./aditiYadav-modified.png"

import teamCardPngLarge from "./assets/teamCard-large.png"
import teamCardPng from "./assets/teamCard-mobile.png"
import githubLogo from "../footer/assets/githubLogo.png";
import instagramLogo from "../footer/assets/instagramLogo.png";
import linkedinLogo from "../footer/assets/linkedinLogo.png";

const TeamCard = (props) => {

    const {memberImage, memberName, memberCollegeYear, memberInstagramLink, memberGithubLink, memberLinkedinLink} = props

    return (
      <div className="teamCard">
        <div className="teamCardPng-large">
          <img src={teamCardPngLarge} alt="" />
        </div>
        <div className="teamCardPng-mobile">
          <img src={teamCardPng} alt="teamCardPngMobile" />
        </div>
        <div className="teamCard-content">
          <div className="member-image">
            <img src={memberImage} alt={memberName} />
          </div>
          <div className="member-details">
            <div className="personal-details">
              <h3>{memberName}</h3>
              <h4>{memberCollegeYear}</h4>
              <p>Indian Institue of Information Technology, Nagpur</p>
            </div>
            <div className="social-details">
              <div className="follow-icons">
                <div className="icon">
                  <a target="_blank" href={memberInstagramLink}>
                    <img
                      title="instagram"
                      src={instagramLogo}
                      alt="instagramLogo"
                    />
                  </a>
                </div>
                <div className="icon">
                  <a target="_blank" href={memberLinkedinLink}>
                    <img
                      title="linkedin"
                      src={linkedinLogo}
                      alt="linkedinLogo"
                    />
                  </a>
                </div>
                <div className="icon">
                  <a target="_blank" href={memberGithubLink}>
                    <img title="github" src={githubLogo} alt="githubLogo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TeamCard
