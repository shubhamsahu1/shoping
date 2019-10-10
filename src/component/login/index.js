import React from "react";
import Login from "./form";
import i18next from "i18next";
export default () => (
  <section className="login signIn">
    <div className="login-info">
      <h2 className="title title-primary">{i18next.t("Login")}</h2>
      <p className="title title-secondary">
        {i18next.t("Get access to your Order, Wishlist and Recommendations")}
      </p>
    </div>
    <div className="login-form">
      <Login />
    </div>
  </section>
);
