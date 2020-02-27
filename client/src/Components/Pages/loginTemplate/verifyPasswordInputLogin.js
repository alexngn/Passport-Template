import React from "react";
import { Field } from "redux-form";
function renderVerifyPasswordInput({ input, label, meta }) {
  return (
    <div className="form-group mb-3">
      <label>{label}</label>
      <input
        className="form-control w-75"
        type="password"
        placeholder="Verify Password"
        {...input}
      />
    </div>
  );
}

const passwordInputLogin = () => {
  return (
    <Field
      name="verifyPassword"
      label="Verify Password"
      component={renderVerifyPasswordInput}
    />
  );
};

export default passwordInputLogin;
