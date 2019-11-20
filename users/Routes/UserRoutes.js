const router = require("express").Router();

// Middlewares
const { validateUserIDParams } = require("../Middlewares/validateUserID");

// Controllers
const { getUserByID } = require("../Controllers/UserControllers");

// Routes
router.get("/user/:id", validateUserIDParams, getUserByID);

module.exports = router;

