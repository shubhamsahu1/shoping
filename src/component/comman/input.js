import React from "react";

export const inputField = ({
  input,
  label,
  name,
  type,
  meta: { touched, error }
}) => (
  <div className="inputWraper">
    <label htmlFor={name} className="inp">
      <input {...input} id={name} placeholder="&nbsp;" type={type} />
      <span htmlFor={name} className="label">
        {label}
      </span>
      <span className="border"></span>
    </label>
    {touched && error && <span>{error}</span>}
  </div>
);
