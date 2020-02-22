import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
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
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
