import React from "react";
import { Field, reduxForm } from "redux-form";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { inputField } from "./../comman/input";
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
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const loginForm = reduxForm({
  // a unique name for the form
  form: "login"
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
