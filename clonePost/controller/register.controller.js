const passport = require("passport");
const { userModel } = require("../model");
const localStrategy = require("passport-local");
passport.authenticate(new localStrategy(userModel.authenticate()));

const registerUser = async (req, res) => {
  try {
    const { username, email, fullname } = req.body;
    const userData = new userModel({ username, email, fullname });

    userModel.register(userData, req.body.password).then(function () {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    });
  } catch (err) {
    res.status(400).json({
      message: "error Found",
      data: err.message,
    });
  }
};

const loginUser = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
  })(req, res, next);
};

const logOutUser = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};


function isLoggedIn(req, res, next){
    if(req.authenticate()) return next()
    res.redirect("/")
}

module.exports = { registerUser, loginUser , logOutUser};
