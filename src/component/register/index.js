import React from "react";
import i18next from "i18next";
import Register from "./form";

export default () => (
  <section className="register signIn">
    <div className="register-info">
      <h2 className="title title-primary">{i18next.t("SignUp")}</h2>
      <p className="title title-secondary">
        {i18next.t("We do not share your personal details with anyone")}
      </p>
    </div>
    <div className="register-form">
      <Register />
    </div>
  </section>
);
