import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import App from "./Components/App";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";

import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(reduxThunk))
);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
