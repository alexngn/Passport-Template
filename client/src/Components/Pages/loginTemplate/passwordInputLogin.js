import React from "react";
import { Field } from "redux-form";
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

const passwordInputLogin = () => {
  return (
    <Field name="password" label="Password" component={renderPasswordInput} />
  );
};

export default passwordInputLogin;
