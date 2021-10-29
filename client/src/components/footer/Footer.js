import React, { useState } from "react";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";
import footerLogo from "./assets/footerLogo.png";
import instagramLogo from "./assets/instagramLogo.png";
import githubLogo from "./assets/githubLogo.png";
import linkedinLogo from "./assets/linkedinLogo.png";
import db from "../form/firebase";
import { PulseLoader } from "react-spinners";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false)

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -130;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("messages").add({
      email: email,
      message: message,
    })
    .then(()=>{
      setLoader(false);
      setIsSubmitted(true)
    })
    .catch((error)=>{
      alert(error);
      setLoader(false);
    })

    setEmail("")
    setMessage("")
  };

  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="footer-logo-image">
              <img src={footerLogo} alt="footerLogo" />
            </div>
            <div className="footer-logo-slogan">
              <p>
                Committed to learning.
                <br />
                Committed to the future.
              </p>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="footer-quick-links">
            <div className="footer-quick-links-heading">
              <h2>Quick Links:</h2>
            </div>
            <ul className="quick-links">
              <HashLink smooth to="/#">
                <li>Home</li>
              </HashLink>
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="/#form"
              >
                <li>Registration Form</li>
              </HashLink>
              <HashLink smooth to="/ourTeam#">
                <li>Our Team</li>
              </HashLink>
            </ul>
            <p>
              {" "}
              <a href="mailto:iotics@iiitn.ac.in">E-mail: iotics@iiitn.ac.in</a>
            </p>
            <div className="follow">
              <h4>Follow us on:</h4>
              <div className="follow-icons">
                <div className="icon">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/iotics_iiitn/"
                  >
                    <img src={instagramLogo} alt="instagramLogo" />
                  </a>
                </div>
                <div className="icon">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/iotics-club-iiitn/mycompany/"
                  >
                    <img src={linkedinLogo} alt="linkedinLogo" />
                  </a>
                </div>
                <div className="icon">
                  <a target="_blank" href="https://github.com/IoTics-iiitn">
                    <img src={githubLogo} alt="githubLogo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="footer-query">
            <div className="footer-query-heading">
              <h2>For any query/feedback:</h2>
              <form onSubmit={handleSubmit}>
                <div className="footer-query-content">
                  <div className="footer-query-email">
                    <label htmlFor="email">E-mail:</label>
                    <input
                      id="email"
                      autoComplete="off"
                      spellCheck="false"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="footer-query-message">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="message"
                      spellCheck="false"
                      value={message}
                      type="text"
                      onChange={(e) => setMessage(e.target.value)}
                      cols="26"
                      rows="5"
                      required
                    />
                  </div>
                </div>
                <div className="footer-submit-button">
                  <button type="submit">
                    {loader ? (
                      <PulseLoader color="#142965" size={5}></PulseLoader>
                    ) : isSubmitted ? (
                      <p>Sent &#10003;</p>
                    ) : (
                      <p>Send</p>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <h3>Copyright © 2021 All Rights Reserved</h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
