const router = require("express").Router();
const passport = require("passport");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", passportCallback, (req, res) => {
  console.log("The user was", req.user);
  res.send(req.user);
});

function passportCallback(req, res, next) {
  passport.authenticate("local", function(err, user) {
    console.log("passport callback ", user);

    req.user = null;
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("user is false");
      return next();
    } else {
      console.log("log in called");
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return next();
      });
    }
  })(req, res, next);
}

module.exports = router;
