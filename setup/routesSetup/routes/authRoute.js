const router = require("express").Router();
const passport = require("passport");

router.get("/facebook", passport.authenticate("facebook"));
router.get("/twitter", passport.authenticate("twitter"));
router.get("/linkedin", passport.authenticate("linkedin"));
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/login"
  }),
  (req, res) => {
    req.flash("login", "Logged In");
    res.redirect("/");
  }
);
router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    failureRedirect: "/login"
  }),
  (req, res) => {
    req.flash("login", "Logged In");
    res.redirect("/");
  }
);
router.get(
  "/twitter/callback",
  passport.authenticate("twitter", {
    failureRedirect: "/login"
  }),
  (req, res) => {
    req.flash("login", "Logged In");
    res.redirect("/");
  }
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login"
  }),
  (req, res) => {
    req.flash("login", "Logged In");
    res.redirect("/");
  }
);

module.exports = router;
