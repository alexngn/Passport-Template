import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import CreateAccount from "./Pages/CreateAccount";
import Login from "./Pages/Login";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create-account" exact component={CreateAccount} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
