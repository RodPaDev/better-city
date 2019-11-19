const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

function authenticate(req, res, next) {
  const token = req.get("Authorization");

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) {
        res.status(401).json(err);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json("A balid Authentication Token is required.")
  }
}

module.exports = { authenticate };