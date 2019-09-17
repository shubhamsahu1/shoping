import React from "react";
import { Field, reduxForm } from "redux-form";
import { inputField } from "./../comman/input";
const submit = e => {
  // print the form values to the console
  debugger;
  console.log(e);
};
class Login extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} novalidate>
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
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const loginForm = reduxForm({
  // a unique name for the form
  form: "login",
  onSubmit: submit
})(Login);

export default loginForm;
