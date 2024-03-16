const passport = require("passport");
const { userModel } = require("../model");

const registerUser = async (req, res) => {
  try {
    const { username, email, fullname } = req.body;
    const userData = new userModel({ username, email, fullname });
    console.log(req.body.password , 'req.body.password');
    userModel.register(userData, req.body.password, (err, user) => {
      if (err) {
        res.status(400).json({
          message: "error Found",
          data: err.message,
        });
      }
      passport.authenticate("local")(req, res, function () {
        res.redirect("/v1/user/profile");
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



module.exports = { registerUser, loginUser, logOutUser};
