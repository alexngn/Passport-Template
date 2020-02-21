const express = require("express");
const keys = require("./config/keys");
const app = express();
const middleWare = require("./setup/middlewareSetup")(app);
const routes = require("./setup/routesSetup/routesHandler")(app);
const passport = require("./setup/passportSetup");
const mongoose = require("./setup/mongooseSetup");

app.set("view engine", "ejs");

app.listen(keys.PORT, "127.0.0.1", () => {
	console.log(`Listening on Port ${keys.PORT}`);
});
