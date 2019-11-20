const router = require("express").Router();

// Middlewares
const { authenticate } = require("./../../authentication/middleware/authenticate");
const { validateID } = require("./../middlewares/validateID");

// Controllers
const { addVote, deleteVote} = require("./../controllers/votesControllers");

// Routes
router.post("/votes", authenticate, addVote);
router.delete("/votes", authenticate, validateID, deleteVote);

module.exports = router;