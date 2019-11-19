const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

function authenticate(req, res, next) {
  const token = req.get("Authorization");

  if (token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json(err);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(401).json("ACCESS DENIED: VALID TOKEN NOT PROVIDED")
  }
}

module.exports = { authenticate };