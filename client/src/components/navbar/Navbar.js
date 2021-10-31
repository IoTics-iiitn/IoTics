import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

// importing the logo
import logo from "./assets/logo.png";

import "./Navbar.css";

const Navbar = (props) => {
  const { visibility } = props;

  const [show, setShow] = useState(false);
  const menu = useRef(null)

  return (
    <div className="nav-bg">
      <div
        className={
          visibility ? "navbar-container" : "navbar-container is-distinct"
        }
      >
        <nav className="navbar">
          <div className="nav-logo">
            {visibility ? null : <img src={logo} alt="ioticsLogo" />}
          </div>
          <div
            onClick={() => setShow((prevState) => !prevState)}
            className={`${show ? "hamburger-btn open" : "hamburger-btn"}`}
          >
            <div className="hamburger"></div>
          </div>
          <div ref={menu} className={`${show ? "nav-menu hide" : "nav-menu"}`}>
            <ul>
              <NavLink
                onClick={() => setShow((prevState) => !prevState)}
                exact
                activeClassName="is-active"
                to="/"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                onClick={() => setShow((prevState) => !prevState)}
                activeClassName="is-active"
                to="/ourTeam"
              >
                <li>Our Team</li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
