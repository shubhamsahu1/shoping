import React from "react";
import { Field, reduxForm } from "redux-form";
const submit = e => {
  // print the form values to the console
  debugger;
  console.log(e);
};
class Login extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
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
