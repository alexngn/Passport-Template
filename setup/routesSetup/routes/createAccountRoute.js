const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../../../models/user");
const { check, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  res.render("createAccount", { message: null });
});

router.post(
  "/",
  [
    check("username")
      .isEmail()
      .withMessage("Username must be an email")
      .custom(async (value, { req }) => {
        const user = await User.find({ username: value });
        if (!user.length == 0) {
          console.log(user);
          throw new Error("That email has already been registered");
        }
        return true;
      }),
    check(
      "password",
      "Password must be 5-15 characters and include: A-Z a-z 0-9"
    )
      .isLength({ min: 5, max: 15 })
      .matches("([0-9])")
      .matches("([a-z])")
      .matches("([A-Z])"),
    check("verifyPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password confirmation is incorrect");
      }
      return true;
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("createAccount", {
        message: errors.errors[0].msg
      });
    } else {
      bcrypt.hash(req.body.password, 10, function(err, hash) {
        const user = new User({
          username: req.body.username,
          password: hash
        });

        user.save(() => {
          passport.authenticate("local")(req, res, function() {
            res.redirect("/");
          });
        });
      });
    }
  }
);

module.exports = router;
