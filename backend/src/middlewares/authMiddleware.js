const jwt = require("jsonwebtoken");

const authMiddleware = {};

authMiddleware.verifyToken = function (req, res, next) {
  const token = req.cookies['access_token'];
  if (!token) {
    return res.status(401).json({message: "Token invalido"})
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // mejor usar process.env.JWT_SECRET
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({message: "Token invalido"})
  }
};

authMiddleware.adminOnly = function (req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acceso denegado: se requiere rol de administrador' });
  }
  next();
};

module.exports = authMiddleware;
