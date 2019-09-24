import React from "react";

export const inputField = ({
  input,
  label,
  name,
  type,
  meta: { touched, error }
}) => (
  <div className="inputWraper">
    <label htmlFor={name} className="input">
      <input {...input} id={name} placeholder="&nbsp;" type={type} />
      <span htmlFor={name} className="input-label">
        {label}
      </span>
      <span className="input-border"></span>
    </label>
    {touched && error && <span className="input--error">{error}</span>}
  </div>
);
