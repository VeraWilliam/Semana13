const express = require("express");
const { Passport } = require("passport/lib");
const router = express.Router();

router.get("./signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res) => {
    Passport.authenticate('/local,signin'), {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
  }
});

router.post("/profile", (req, res) => {
  res.send("profile");
});
router.post("/logout", (req, res) => {
    req.logOut();
    res.redirect('/signin');
});

module.exports = router;
