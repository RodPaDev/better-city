const users = require("../Models/AuthModel");

async function register(req, res) {
  try {
    const result = await users.insert(req.credentials);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function login(req, res) {
  try {
    const result = await users.login(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllUsers,
  register,
  login
};
