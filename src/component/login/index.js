import React from "react";
import Login from "./form";

export default () => (
  <section className="login">
    <div className="login-left">
      <h2 className="login-left--header">Login</h2>
      <span className="login-left--sub">
        Get access to your Order, Wishlist and Recommendations
      </span>
    </div>
    <div className="login-form">
      <Login />
    </div>
  </section>
);
