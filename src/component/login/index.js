import React from "react";
import Login from "./form";
import i18next from "i18next";
export default () => (
  <section className="login">
    <div className="login-info">
      <h2 className="title title-primary">{i18next.t("Login")}</h2>
      <span className="title title-secondary">
        {i18next.t("Get access to your Order, Wishlist and Recommendations")}
      </span>
    </div>
    <div className="login-form">
      <Login />
    </div>
  </section>
);
