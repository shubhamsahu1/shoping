import React from "react";
import Register from "./form";

export default () => (
  <section className="register">
    <div className="register-left">
      <h2 className="register-left--header">SignUp</h2>
      <span className="register-left--sub">
        We do not share your personal details with anyone
      </span>
    </div>
    <div className="register-form">
      <Register />
    </div>
  </section>
);
