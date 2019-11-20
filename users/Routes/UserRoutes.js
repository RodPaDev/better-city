const router = require("express").Router();

// Middlewares
const { validateUserId } = require("../Middlewares/validateUserID");

// Controllers
const { getUserByID } = require("../Controllers/UserControllers");

router.get("/user/:id", validateUserId, getUserByID);

module.exports = router;
