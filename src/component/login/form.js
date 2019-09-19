import React from "react";
import { Field, reduxForm } from "redux-form";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { inputField } from "./../common/input";
const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
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
  return errors;
};
const submit = (values, changePage) => {
  console.log(values);
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
          name="username"
          type="text"
          component={inputField}
          label="Username"
        />
        <Field
          name="password"
          type="password"
          component={inputField}
          label="Password"
        />
        <button className="login-form--submit" type="submit">
          Submit
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
    changePage: () => dispatch(push("/"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginForm);
