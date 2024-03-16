const { userService } = require("../services");
const passport = require("passport");

const postUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const body = req.body;
    if (!username || !email) {
      throw new Error("data not get");
    }

    const resName = await userService.checkName(username);
    if (resName) {
      throw new Error("username must be unique");
    }

    const resBody = await userService.userPost(body);
    if (!resBody) {
      throw new Error("user not created");
    }

    res.redirect("/");
  } catch (error) {
    res.status(400).json({
      message: "error found",
      data: error.message,
    });
  }
};


const loginUser = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
    failureFlash: true,
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



module.exports = { postUser, loginUser, logOutUser };
