import React from "react";
import Register from "./form";

export default () => (
  <section className="register">
    <div className="register-info">
      <h2 className="title title-primary">SignUp</h2>
      <span className="title title-secondary">
        We do not share your personal details with anyone
      </span>
    </div>
    <div className="register-form">
      <Register />
    </div>
  </section>
);
