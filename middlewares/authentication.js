const { validateToken } = require("../services/authentication");
const User = require("../models/user");

function checkForAuthenticationCookie(cookieName) {
  return async (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];

    if (!tokenCookieValue) {
      return next();
    }

    try {
      // Decode JWT → get user id
      const payload = validateToken(tokenCookieValue);

      // Fetch full user from DB
      const user = await User.findById(payload.id);

      if (!user) {
        return next();
      }

      req.user = user;
      res.locals.user = user;   // for EJS

    } catch (error) {
      console.error("JWT Error:", error.message);
    }

    return next();
  };
}

module.exports = {
  checkForAuthenticationCookie,
};
