import React from "react";
import LoginTemplate from "./LoginTemplate";

function renderForm() {
  return (
    <form method="POST" action="/create-account">
      <div className="form-group">
        <label for="Email">Email address</label>
        <input
          name="username"
          type="email"
          className="form-control w-75"
          id="Email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label for="Password">Password</label>
        <input
          name="password"
          type="password"
          className="form-control w-75"
          id="Password"
          placeholder="Password"
        />
        <small id="emailHelp" className="form-text text-muted">
          Password length must be 5-15 and contain numbers and both uppercase
          and lowercase characters.
        </small>
      </div>
      <div className="form-group">
        <label for="VerifyPassword">Verify Password</label>
        <input
          name="verifyPassword"
          type="password"
          className="form-control w-75"
          id="VerifyPassword"
          placeholder="Password"
        />
      </div>
      <button type="submit" className=" btn btn-dark ">
        Create My Account
      </button>
    </form>
  );
}

function renderPhoto() {
  return (
    <div className="col p-0 m-0">
      <img
        className="img-fluid vh-100"
        alt="Passport-Login"
        src="/sunset.jpg"
      />
    </div>
  );
}

const CreateAccount = () => {
  return (
    <LoginTemplate
      photo={renderPhoto}
      form={renderForm}
      socialMedia={() => {}}
    />
  );
};

export default CreateAccount;
