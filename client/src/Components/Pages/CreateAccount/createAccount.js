import React, { useContext } from "react";
import LoginTemplate from "../loginTemplate";
import EmailInput from "../loginTemplate/emailInputLogin";
import PasswordInput from "../loginTemplate/passwordInputLogin";
import VerifyPasswordInput from "../loginTemplate/verifyPasswordInputLogin";
import { connect } from "react-redux";
import axios from "axios";
import { LoginContext } from "../../../context/login-context";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import {
  ADD_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGE
} from "../../actions/flashMessage.js";

const CreateAccount = ({ handleSubmit, history }) => {
  const context = useContext(LoginContext);
  function renderForm() {
    async function OnSubmit(formData) {
      const response = await axios.post(
        "http://localhost:3001/create-account",
        formData
      );
      console.log(response);
      if (response.data._id) {
        context.toggleLogin(response.data._id);
        history.push("/");
      } else {
        console.log("fail login");
      }
    }

    return (
      <form onSubmit={handleSubmit(OnSubmit)}>
        <EmailInput />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
        <PasswordInput />
        <small id="emailHelp" className="form-text text-muted">
          Password length must be 5-15 and contain numbers and both uppercase
          and lowercase characters.
        </small>
        <VerifyPasswordInput />
        <button type="submit" className=" btn btn-dark ">
          Create My Account
        </button>
      </form>
    );
  }
  return <LoginTemplate form={renderForm} />;
};

export default connect(null, { ADD_FLASH_MESSAGE, CLEAR_FLASH_MESSAGE })(
  withRouter(
    reduxForm({
      form: "form"
    })(CreateAccount)
  )
);
