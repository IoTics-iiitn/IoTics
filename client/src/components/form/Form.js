import React from 'react'
import "./Form.css"

import FormField from './FormField';

const Form = () => {
    return (
      <div className="form-container">
        <div className="form-heading">
          <h1>Join the Crew</h1>
        </div>
        <div className="form-content">
          <div className="form-fields">
            <FormField fieldName="Name" ></FormField>
            <FormField fieldName="Roll No" ></FormField>
            <FormField fieldName= "E-mail" ></FormField>
            <FormField fieldName="Phone No" ></FormField>
          </div>
          <div className="form-image"></div>
        </div>
        <div className="form-button"></div>
      </div>
    );
}

export default Form