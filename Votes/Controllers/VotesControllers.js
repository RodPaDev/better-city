const votes = require("../Models/VotesModels");

async function addVote(req, res) {
  try {
    const result = await votes.insertVote(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong, try again in a few minutes",
      error
    });
  }
}

async function deleteVote(req, res) {
  try {
    const result = await votes.removeVote(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong, try again in a few minutes",
      error
    });
  }
}

module.exports = { addVote, deleteVote };
