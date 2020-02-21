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
		console.log("Success!");
		req.flash("login", "Logged In");
		res.redirect("http://localhost:3000/");
	}
);

module.exports = router;
