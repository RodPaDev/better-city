const db = require("../../data/dbConfig");

async function validateUserID(req, res, next) {
  try {
    const users = await db("users").select("users.id");
    const isID = users.filter(user => user.id === Number(req.body.user_id));
    if (isID.length) {
      next();
    } else {
      res
        .status(500)
        .json(`User ${req.body.user_id} does not exist in our database`);
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Something went wrong, try again in a few minutes",
        error
      });
  }
}

module.exports = { validateUserID };
