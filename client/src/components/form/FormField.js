import React from 'react'
import "./Form.css"

const FormField = (props) => {

    const {fieldName, inputType, onChange, value, maxLength, title, pattern, style} = props;

    return (
        <div className="form-field">
          <div className="field-input">
              <label htmlFor={fieldName}>{fieldName}</label>
              <input style={style} title={title}  id={fieldName} value={value} onChange={onChange} type={inputType} maxLength={maxLength} pattern={pattern} required/>
          </div>
        </div>
    );
}

export default FormField
