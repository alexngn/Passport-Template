const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../../../models/user");
const { check, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  res.render("createAccount", { message: null });
});

async function usernameValidation(value) {
  const user = await User.find({ username: value });
  if (!user.length == 0) {
    console.log(user);
    throw new Error("That email has already been registered");
  }
  return true;
}

function passwordValidation(value, { req }) {
  if (value !== req.body.password) {
    throw new Error("Password confirmation is incorrect");
  }
  return true;
}

function hashPassword(hash, req, res) {
  const user = new User({
    username: req.body.username,
    password: hash
  });

  user.save(() => {
    passport.authenticate("local")(req, res, function() {
      req.flash("login", "Logged In");
    });
  });

  res.send(user);
}

const validations = [
  check("username")
    .isEmail()
    .withMessage("Username must be an email")
    .custom(usernameValidation),
  check("password", "Password must be 5-15 characters and include: A-Z a-z 0-9")
    .isLength({ min: 5, max: 15 })
    .matches("([0-9])")
    .matches("([a-z])")
    .matches("([A-Z])"),
  check("verifyPassword").custom(passwordValidation)
];

router.post("/", validations, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.send(null);
  } else {
    const hash = await bcrypt.hash(req.body.password, 10);
    hashPassword(hash, req, res);
  }
});

module.exports = router;
