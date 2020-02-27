import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LoginContext } from "../../context/login-context";
import { CLEAR_FLASH_MESSAGE } from "../actions/flashMessage";

class Header extends Component {
  loggedOutNav = (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/create-account">
          Sign Up
        </a>
      </li>
    </ul>
  );

  loggedInNav = (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link
          className="nav-link text-white"
          to="/"
          onClick={() => {
            this.props.CLEAR_FLASH_MESSAGE();
            this.context.toggleLogin(null);
          }}
        >
          Logout
        </Link>
      </li>
    </ul>
  );

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark clearfix">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand  text-white" to="/">
              Passport Template
            </Link>
          </div>
          <div className="float-right">
            <LoginContext.Consumer>
              {({ user }) => {
                if (user) return this.loggedInNav;
                return this.loggedOutNav;
              }}
            </LoginContext.Consumer>
          </div>
        </div>
      </nav>
    );
  }
}

Header.contextType = LoginContext;

export default connect(null, { CLEAR_FLASH_MESSAGE })(Header);
