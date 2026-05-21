const jwt = require("jsonwebtoken");

const authMiddleware = {};

authMiddleware.verifyToken = function (req, res, next) {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  console.log(token)

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  try {
    const decoded = jwt.verify(token, "CLAVESECRETA123"); // mejor usar process.env.JWT_SECRET
    req.decoded = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
