import React from "react";
import { Field, reduxForm } from "redux-form";
import { inputField } from "./../comman/input";
const submit = value => {
  debugger;
  console.log(value);
};
class Register extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} novalidate>
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
  form: "register",
  onSubmit: submit
})(Register);

export default registerForm;
