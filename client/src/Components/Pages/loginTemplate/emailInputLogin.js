import React from "react";
import { Field } from "redux-form";

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

const emailInputLogin = () => {
  return (
    <Field name="username" label="Email Address" component={renderEmailInput} />
  );
};

export default emailInputLogin;
