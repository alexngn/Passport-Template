import React, { useContext } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import LoginTemplate from "../loginTemplate";
import { LoginContext } from "../../../context/login-context";
import {
  ADD_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGE
} from "../../actions/flashMessage.js";

const Login = ({
  handleSubmit,
  history,
  ADD_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGE
}) => {
  const context = useContext(LoginContext);
  function renderEmailInput({ input, label, meta }) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          className="form-control w-75"
          placeholder="Enter email"
          aria-describedby="emailHelp"
          {...input}
        />
      </div>
    );
  }
  function renderPasswordInput({ input, label, meta }) {
    return (
      <div className="form-group mb-3">
        <label>{label}</label>
        <input
          className="form-control w-75"
          type="password"
          placeholder="Password"
          {...input}
        />
      </div>
    );
  }

  async function OnSubmit(formData) {
    const response = await axios.post("http://localhost:3001/login", formData);
    console.log("THE RESPONSE IS", response.data._id);
    CLEAR_FLASH_MESSAGE();
    if (response.data !== "") {
      ADD_FLASH_MESSAGE({
        text: "Logged In",
        type: "Success"
      });
      context.toggleLogin(response.data._id);
      localStorage.setItem("user", response._id);
      history.push("/");
    } else {
      ADD_FLASH_MESSAGE({
        text: "Incorrect username or password",
        type: "Failure"
      });
      history.push("/login");
    }
  }

  function renderForm(handleSubmit) {
    return (
      <form onSubmit={handleSubmit(OnSubmit)}>
        <Field
          name="username"
          label="Email address"
          component={renderEmailInput}
        />
        <Field
          name="password"
          label="Password"
          component={renderPasswordInput}
        />
        <button type="submit" className=" btn btn-dark mr-3 px-4">
          Login
        </button>
        <a className="d-block mt-3" href="/forgot-password">
          Forgot Your Password?
        </a>
      </form>
    );
  }

  return <LoginTemplate form={renderForm.bind(this, handleSubmit)} />;
};

export default connect(null, { ADD_FLASH_MESSAGE, CLEAR_FLASH_MESSAGE })(
  withRouter(
    reduxForm({
      form: "form"
    })(Login)
  )
);
