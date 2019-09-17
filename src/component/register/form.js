import React from "react";
import { Field, reduxForm } from "redux-form";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { inputField } from "./../comman/input";
const submit = (values, changePage) => {
  console.log(values);
  changePage("/");
};
const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Required";
  }
  if (!values.lastname) {
    errors.lastname = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Minimum length 6 characters";
  } else if (
    !/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/i.test(values.password)
  ) {
    errors.password = "Must have a number and alphabet";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword.length < 6) {
    errors.confirmPassword = "Minimum length 6 characters";
  } else if (
    !/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/i.test(values.confirmPassword)
  ) {
    errors.confirmPassword = "Must have a number and alphabet";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Confirm password needs to be same as password";
  }
  return errors;
};
class Register extends React.Component {
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
          name="firstname"
          type="text"
          component={inputField}
          label="Firstname"
        />
        <Field
          name="lastname"
          type="text"
          component={inputField}
          label="Lastname"
        />
        <Field name="email" type="email" component={inputField} label="Email" />
        <Field
          name="password"
          type="password"
          component={inputField}
          label="Password"
        />
        <Field
          name="confirmPassword"
          type="password"
          component={inputField}
          label="Confirm Password"
        />
        <button className="register-form--submit" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const registerForm = reduxForm({
  // a unique name for the form
  form: "register",
  validate
})(Register);

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    changePage: () => dispatch(push("/"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(registerForm);
