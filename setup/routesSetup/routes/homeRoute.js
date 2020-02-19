const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homePage", {
    Authenticated: req.isAuthenticated(),
    message: req.flash("login")
  });
});
router.get("/logout", (req, res) => {
  req.flash("login", "Successfully Logged Out");
  req.logout();
  res.redirect("/");
});

module.exports = router;
