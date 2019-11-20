const db = require("../../data/dbConfig");

async function uniqueContactInfo(req, res, next) {
  try {
    const users = await db("users").select("email", "phone");
    const isEmail = users.filter(user => user.email === req.body.email);
    const isPhone = users.filter(user => user.phone === req.body.phone);
    if (isEmail.length) {
      res.status(500).json(`${req.body.email} is already in use`);
    } else if (isPhone.length) {
      res.status(500).json(`${req.body.phone} is already in use`);
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong, try again in a few minutes",
      error
    });
  }
}

module.exports = { uniqueContactInfo };
