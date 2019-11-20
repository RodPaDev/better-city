const router = require("express").Router();

// Middlewares

// Controllers
const { addVote, deleteVote } = require("../Controllers/VotesControllers");

// Routes
router.post("/votes", addVote);
router.delete("/votes", deleteVote);

module.exports = router;