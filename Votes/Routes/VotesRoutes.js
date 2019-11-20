const router = require("express").Router();

// Middlewares
const { authenticate } = require("../../Authentication/Middleware/authenticate");
const { validateID } = require("../Middlewares/validateID");

// Controllers
const { addVote, deleteVote} = require("../Controllers/VotesControllers");

// Routes
router.post("/votes", authenticate, addVote);
router.delete("/votes", authenticate, validateID, deleteVote);

module.exports = router;