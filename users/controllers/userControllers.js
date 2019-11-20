const users = require("./../models/userModels");

async function getUserByID(req, res) {
  try {
    const result = await users.getById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong, try again in a few minutes",
      error
    });
  }
}

module.exports = { getUserByID };
