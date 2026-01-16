const JWT = require("jsonwebtoken");

const secret = '$uperman@123';

function createTokenForUser(user) {
  const payload = {
    id: user._id
  };

  return JWT.sign(payload, secret, {
    expiresIn: "7d",
  });
}

function validateToken(token) {
  return JWT.verify(token, secret);
}

module.exports = {
  createTokenForUser,
  validateToken,
};
