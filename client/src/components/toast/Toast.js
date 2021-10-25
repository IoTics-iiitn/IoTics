import React from 'react'
import "./Toast.css"

import formSuccessRobot from "./assets/formSuccessRobot.png";
import formFailureRobot from "./assets/formFailureRobot.png";
import {ReactComponent as FormSuccessRobot } from "./assets/formSuccessRobot.svg";
import { ReactComponent as FormFailureRobot } from "./assets/formFailureRobot.svg";

const Toast = (props) => {

    const {success} = props

    return (
      <div className="toast">
        <div className="toast-heading">
          {success ? <h1>Thank you for filling the form.</h1> : null}
          {success ? (
            <h2>You will be responded soon.</h2>
          ) : (
            <h2>Oops ! You forgot to add something. Please cross check information and try again.</h2>
          )}
        </div>
        <div className="toast-image">
          {success ? (
            <img src={formSuccessRobot} alt="" />
          ) : (
            <img src={formFailureRobot} alt="" />
          )}
        </div>
      </div>
    );
}

export default Toast
