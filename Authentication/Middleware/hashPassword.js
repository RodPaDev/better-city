const bcrypt = require("bcryptjs");

function hashPassword(req, res, next) {
  if (req.body && req.body.password) {
    const password = bcrypt.hashSync(req.body.password);
    req.credentials = { ...req.body, password };
  }
  next();
}

module.exports = { hashPassword };
