import React from 'react'

const FormField = (props) => {

    const {fieldName, inputType} = props;

    return (
        <div className="form-field">
          <div className="field-name">
              <h3>{fieldName}</h3>
          </div>
          <div className="field-input">
              <input type={inputType} />
          </div>
        </div>
    );
}

export default FormField
