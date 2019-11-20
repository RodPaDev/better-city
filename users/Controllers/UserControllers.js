const users = require("../Models/UserModels");

async function getUserByID(req, res) {
  try {
    const result = users.getById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function deleteUserByID(req, res) {
  try {
    const result = users.deleteUserByID(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function updateUserInfo(req, res) {
  try {
    const result = users.updateUserInfo(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {}
}

module.exports = { getUserByID, deleteUserByID, updateUserInfo };
