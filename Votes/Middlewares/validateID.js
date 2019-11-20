const votes = require("../Models/VotesModels");

async function validateID(req, res, next) {
  try {
    const vote = await votes.getVote(req.body);
    console.log(vote);
    if (vote.length) {
      next();
    } else {
      res.status(404).json("Vote not found")
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = { validateID };
