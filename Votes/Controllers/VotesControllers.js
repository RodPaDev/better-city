const votes = require("../Models/VotesModels");

async function addVote(req, res) {
  try {
    const result = await votes.insertVote(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function deleteVote(req, res) {
  try {
    const result = await votes.removeVote(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = { addVote, deleteVote };
