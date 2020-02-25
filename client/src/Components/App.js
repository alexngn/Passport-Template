import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import CreateAccount from "./pages/createAccount";
import Login from "./pages/login";
import { LoginContext } from "../context/login-context";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleLogin = () => {
      console.log("STATE CHANGED");
      this.setState(state => ({
        user: state.user == null ? true : null
      }));
    };
    this.state = {
      user: null,
      toggleLogin: this.toggleLogin
    };
  }
  render() {
    return (
      <LoginContext.Provider value={this.state}>
        <Router>
          <Switch>
            <Route path="/create-account" exact component={CreateAccount} />
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </Router>
      </LoginContext.Provider>
    );
  }
}

export default App;
