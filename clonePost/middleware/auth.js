function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/v1/user");
  }


  
  module.exports = { isLoggedIn };