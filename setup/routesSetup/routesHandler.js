const homeRoute = require("./routes/homeRoute");
const loginRoute = require("./routes/loginRoute");
const createAccountRoute = require("./routes/createAccountRoute");
const authRoute = require("./routes/authRoute");
module.exports = function(app) {
  app.use("/", homeRoute);
  app.use("/login", loginRoute);
  app.use("/create-account", createAccountRoute);
  app.use("/auth", authRoute);
};
