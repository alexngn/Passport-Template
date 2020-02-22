const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const express = require("express");
const flash = require("connect-flash");
const cors = require("cors");
module.exports = function(app) {
  app.use(express.static(__dirname + "/../public"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ extended: true }));
  app.use(cookieParser());
  app.use(
    cors({
      methods: ["get", "post"]
    })
  );
  app.use(flash());
  app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
};
