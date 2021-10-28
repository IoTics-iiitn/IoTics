import React from 'react'
import "./TeamCard.css"
import wingLead from "./wingLead.jpeg"
import aditiYadav from "./aditiYadav-modified.png"

import {ReactComponent as TeamCardSvgLarge} from "./assets/teamCard-large.svg"
import teamCardPng from "./assets/teamCard-mobile.png"
import githubLogo from "../footer/assets/githubLogo.png";
import instagramLogo from "../footer/assets/instagramLogo.png";
import linkedinLogo from "../footer/assets/linkedinLogo.png";

const TeamCard = (props) => {

    const {memberImage, memberName, memberCollegeYear, memberInstagramLink, memberGithubLink, memberLinkedinLink} = props

    return (
      <div className="teamCard">
        <div className="teamCardSvg-large">
          <TeamCardSvgLarge></TeamCardSvgLarge>
        </div>
        <div className="teamCardPng-mobile">
            <img src={teamCardPng} alt="teamCardPngMobile" />
        </div>
        <div className="teamCard-content">
          <div className="member-image">
            <img src={memberImage} alt="" />
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
                  <a
                    target="_blank"
                    href={memberInstagramLink}
                  >
                    <img src={instagramLogo} alt="instagramLogo" />
                  </a>
                </div>
                <div className="icon">
                  <a
                    target="_blank"
                    href={memberLinkedinLink}
                  >
                    <img src={linkedinLogo} alt="linkedinLogo" />
                  </a>
                </div>
                <div className="icon">
                  <a target="_blank" href={memberGithubLink}>
                    <img src={githubLogo} alt="githubLogo" />
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
