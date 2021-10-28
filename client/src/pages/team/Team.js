import React from "react";
import "./Team.css";

import teamsHeroBg from "./assets/teamsHeroBg.png";
import Carousel from "../../components/carousel/Carousel";
import teamsData from "./teamsData";

const Team = () => {

  // console.log("lol")

  return (
    <div className="teams-page">
      <div className="teams-page-bg">
        <img src={teamsHeroBg} alt="" />
      </div>
      <div className="section-content">
        <section>
          <h1>IoTics - Who are we ?</h1>
          <p>
            IoTics Club is the official student ‘Internet Of Things’ development
            and learning club of IIIT Nagpur. The club brings together IoT
            enthusiasts for community learning and advancement. We aim to
            develop projects that glorify the interconnection of devices.
          </p>
          <p>
            We are oriented towards developing IoT-powered solutions for an
            ever-growing demand of a more cognate future.
          </p>
        </section>
      </div>
      <div className="carousels">
        <Carousel
          heading="Wing Coordinator"
          cards={teamsData[0].wingCoordinator}
        ></Carousel>
        <Carousel
          heading="Management Team"
          cards={teamsData[1].managementTeam}
        ></Carousel>
        <Carousel
          heading="Design Team"
          cards={teamsData[2].designTeam}
        ></Carousel>
        <Carousel
          heading="Marketing Team"
          cards={teamsData[3].marketingTeam}
        ></Carousel>
        <Carousel
          heading="Content Team"
          cards={teamsData[4].contentTeam}
        ></Carousel>
        <Carousel
          heading="Webdev Team"
          cards={teamsData[5].webdevTeam}
        ></Carousel>
      </div>
    </div>
  );
};

export default Team;
