const users = require("../Models/UserModels");

async function getUserByID(req, res) {
  try {
    const result = await users.getById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = { getUserByID };
