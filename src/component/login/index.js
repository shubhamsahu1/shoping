import React from "react";
import Login from "./form";

export default () => (
  <section className="login">
    <div className="login-info">
      <h2 className="title title-primary">Login</h2>
      <span className="title title-secondary">
        Get access to your Order, Wishlist and Recommendations
      </span>
    </div>
    <div className="login-form">
      <Login />
    </div>
  </section>
);
