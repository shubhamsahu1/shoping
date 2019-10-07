import React from "react";
import { Field, reduxForm } from "redux-form";
import { push } from "connected-react-router";
import i18next from "i18next";
import { connect } from "react-redux";
import { inputField } from "./../common/input";
import { emailRegExp, passwordRegExp } from "../../common";
const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = i18next.t("Required");
  } else if (!emailRegExp.test(values.email)) {
    errors.email = i18next.t("Invalid email address");
  }

  if (!values.password) {
    errors.password = i18next.t("Required");
  } else if (values.password.length < 6) {
    errors.password = i18next.t("Minimum length 6 characters");
  } else if (!passwordRegExp.test(values.password)) {
    errors.password = i18next.t("Must have a number and alphabet only");
  }
  return errors;
};
const submit = (values, changePage) => {
  changePage("/");
};
class Login extends React.Component {
  render() {
    const { handleSubmit, changePage } = this.props;
    return (
      <form
        onSubmit={handleSubmit(values => {
          submit(values, changePage);
        })}
        noValidate
      >
        <Field
          name="email"
          type="email"
          component={inputField}
          label={i18next.t("Email")}
        />
        <Field
          name="password"
          type="password"
          component={inputField}
          label={i18next.t("Password")}
          helpText={i18next.t("Password must have a number and alphabet only")}
        />
        <button
          className="login-form--submit"
          type="submit"
          aria-label="Press Enter to Submit"
        >
          {i18next.t("Submit")}
        </button>
      </form>
    );
  }
}

const loginForm = reduxForm({
  // a unique name for the form
  form: "login",
  validate
})(Login);

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    changePage: url => dispatch(push(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginForm);
