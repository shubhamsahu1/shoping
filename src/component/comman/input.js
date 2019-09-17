import React from "react";

export const inputField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div className="inputWraper">
    <label htmlFor="inp" className="inp">
      <input {...input} placeholder="&nbsp;" type={type} />
      <span className="label">{label}</span>
      <span className="border"></span>
    </label>

    {touched && error && <span>{error}</span>}
  </div>
);
