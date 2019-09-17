import React from "react";

export const inputField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div className="inputWraper">
    <label for="inp" class="inp">
      <input {...input} placeholder="&nbsp;" type={type} />
      <span class="label">{label}</span>
      <span class="border"></span>
    </label>

    {touched && error && <span>{error}</span>}
  </div>
);
