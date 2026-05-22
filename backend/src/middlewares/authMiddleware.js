const jwt = require("jsonwebtoken");

const authMiddleware = {};

authMiddleware.verifyToken = function (req, res, next) {
  const token = req.cookies['access_token'];
  console.log(token)
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

authMiddleware.isLogued = function (req, res, next) {
  const token = req.cookies['access_token'];
  if(token){
    try{
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
      return res.status(200).json({message:"You are already logued", user:decoded});
    }catch{
      return next();
    }
  }
  next();

}

module.exports = authMiddleware;
