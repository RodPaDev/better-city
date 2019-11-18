const db = require("../../data/dbConfig");

async function uniqueContactInfo(req, res, next) {
  try {
    const emails = await db("users").select("email", "phone");
    const isEmail = emails.filter(item => item.email === req.body.email);
    const isPhone = emails.filter(item => item.phone === req.body.phone);
    if (isEmail.length) {
      res.status(500).json(`${req.body.email} is already in use`);
    } else if (isPhone.length) {
      res.status(500).json(`${req.body.phone} is already in use`);
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json("Something went wrong, try again in a few minutes.");
  }
}

module.exports = { uniqueContactInfo };
