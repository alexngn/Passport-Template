import React from "react";
import { Field, reduxForm } from "redux-form";
import LoginTemplate from "./LoginTemplate";
import axios from "axios";
import { withRouter } from "react-router-dom";
import addFlashMessage from "../actions/FlashMessage.js";
import { connect } from "react-redux";

const Login = ({ handleSubmit, history, addFlashMessage }) => {
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

  async function onSubmit(formData) {
    console.log("handled!");
    console.log(formData);
    const response = await axios.post("http://localhost:3001/login", formData);
    addFlashMessage({
      type: "success",
      text: "successfully logged in"
    });
    console.log(response);
    console.log(typeof history);
    console.log(history);
    history.push("/");
  }

  function renderForm(handleSubmit) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
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

  function renderSocialMedia() {
    return (
      <>
        <p>Or sign in with social media below</p>
        <a className="px-3 mr-3 ui red google button" href="/auth/google">
          <i className="google icon" />
          Google
        </a>
        <a
          className="px-auto mr-3 mb-3 ui facebook button"
          href="/auth/facebook"
        >
          <i className="facebook icon"></i>
          Facebook
        </a>
        <a className="px-auto mr-3 ui linkedin button" href="/auth/linkedin">
          <i className="linkedin icon" />
          LinkedIn
        </a>
        <a className="px-auto mr-3 ui twitter button" href="/auth/twitter">
          <i className="twitter icon" />
          Twitter
        </a>
      </>
    );
  }

  function renderPhoto() {
    return (
      <div className="col p-0 m-0">
        <img className="img-fluid vh-100" alt="" src="/sunset.jpg" />
      </div>
    );
  }

  return (
    <LoginTemplate
      photo={renderPhoto}
      form={renderForm.bind(this, handleSubmit)}
      socialMedia={renderSocialMedia}
    />
  );
};

export default connect(null, { addFlashMessage })(
  withRouter(
    reduxForm({
      form: "form"
    })(Login)
  )
);
