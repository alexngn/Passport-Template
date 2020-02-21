import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import Header from "./Partials/Header";
const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/create-account" exact component={CreateAccount} />
				<Route path="/login" exact component={Login} />
				<Header />
				<div className="container">
					<Route path="/" exact component={Dashboard} />
				</div>
			</Switch>
		</Router>
	);
};

export default App;
