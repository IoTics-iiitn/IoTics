import React, { useState, useRef, useEffect } from "react";
import "./Form.css";

import FormField from "./FormField";
import robots from "./assets/robots.png";
import { ReactComponent as Ellipse } from "./assets/ellipse.svg";
import db from "./firebase";
import PulseLoader from "react-spinners/PulseLoader";
import Toast from "../toast/Toast";

const Form = () => {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loader, setLoader] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toastContainer = useRef(null);

  const validated = () => {
    if (
      rollNumber.trim().length === 10 &&
      phoneNumber.trim().length === 10 &&
      /^\d+$/.test(phoneNumber)
    ) {
      return true;
    }
  };

  useEffect(() => {
    if (showToast) {
      toastContainer.current.style.transform = "scale(1)";
    } else {
      toastContainer.current.style.transform = "scale(0)";
    }
  }, [showToast]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    if (!validated()) {
      setShowToast(true);
      setIsSuccess(false);
      setLoader(false);
    } else {
      db.collection("users")
        .add({
          name: name,
          rollNumber: rollNumber,
          email: email,
          phoneNumber: phoneNumber,
        })
        .then(() => {
          setShowToast(true);
          setIsSuccess(true);
          setLoader(false);
          setSubmitted(true);
        })
        .catch((error) => {
          alert(error);
          setLoader(false);
        });

      setName("");
      setEmail("");
      setPhoneNumber("");
      setRollNumber("");
    }
  };

  return (
    <>
      <div id="form" className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-heading">
            <h1>Join the Crew</h1>
          </div>
          <div className="form-content">
            <div className="form-fields">
              <FormField
                inputType="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fieldName="Name"
                title="Input your name"
              ></FormField>
              <FormField
                style={{ textTransform: "uppercase" }}
                inputType="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                fieldName="Roll No"
                title="Input your 10 digit roll number"
                maxLength="10"
                // pattern=".{10,10}"
              ></FormField>
              <FormField
                inputType="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fieldName="E-mail"
                title="Input your email"
              ></FormField>
              <FormField
                inputType="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                fieldName="Phone No"
                maxLength="10"
                title="Input your 10 digit phone number."
                // pattern=".{10,10}"
              ></FormField>
            </div>
            <div className="form-image">
              <img src={robots} alt="robots" />
              <Ellipse></Ellipse>
            </div>
          </div>
          <div className="form-button">
            <button
              type="submit"
              style={
                submitted
                  ? { background: "#ffffff", color: "#ff697e", cursor:"not-allowed" }
                  : { background: "#ff697e", color: "#fffff" }
              }
              onClick={() => console.log(name, rollNumber, phoneNumber, email)}
              disabled = {submitted ? true : false}
              title={submitted ? "Thanks ! You have submitted the form successfully !" : null}
            >
              {loader ? (
                <PulseLoader color="#fff" size={10}></PulseLoader>
              ) : submitted ? (
                "Submitted Successfully"
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
      <div ref={toastContainer} className="toast-container">
        <div className="toast-close-container">
          {isSuccess ? (
            <Toast success={true}></Toast>
          ) : (
            <Toast success={false}></Toast>
          )}
          <div onClick={() => setShowToast(false)} className="toast-close">
            X
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
