import React from 'react'
import ReactPlayer from "react-player/youtube";
import "./ProjectVideo.css"

const ProjectVideo = () => {
    return (
      <div className="project-video-container">
        <div className="projects">
          <div className="heading">
            <h1>Upcoming Project</h1>
          </div>
          <div className="project-video">
            <ReactPlayer height="500px" url="https://youtu.be/MY-gTS0oS3w" />
          </div>
        </div>
      </div>
    );
}

export default ProjectVideo
