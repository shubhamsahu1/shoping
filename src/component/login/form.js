import React from "react";
import { Field, reduxForm } from "redux-form";
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
        <div className="inputwraper">
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="emil" />
        </div>
        <div className="inputwraper">
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
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
