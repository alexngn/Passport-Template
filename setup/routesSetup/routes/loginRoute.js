const router = require("express").Router();
const passport = require("passport");

router.get("/", (req, res) => {
  res.render("login");
});

router.post(
  "/",
  passport.authenticate("local", {
    failureRedirect: "/login"
  }),
  (req, res) => {
    req.flash("login", "Logged In");
    res.redirect("/");
  }
);

module.exports = router;
