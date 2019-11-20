const router = require("express").Router();

// Middlewares
const { validateUserIDParams } = require("./../middlewares/validateUserID");

// Controllers
const { getUserByID } = require("./../controllers/userControllers");

// Routes
router.get("/user/:id", validateUserIDParams, getUserByID);

module.exports = router;

