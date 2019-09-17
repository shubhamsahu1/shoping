import React from "react";
import { Field, reduxForm } from "redux-form";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { inputField } from "./../comman/input";
const submit = (values, changePage) => {
  console.log(values);
  changePage("/");
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
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const registerForm = reduxForm({
  // a unique name for the form
  form: "register"
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
