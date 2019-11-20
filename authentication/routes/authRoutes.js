const router = require("express").Router();

// Controllers
const {
  register,
  login
} = require("./../controllers/authControllers");

// Middlewares
const { validateForm } = require("./../middleware/validateForm");
const { uniqueContactInfo } = require("./../middleware/uniqueEmail");
const { hashPassword } = require("./../middleware/hashPassword");

// Authentication Routes
router.post("/register", validateForm, uniqueContactInfo, hashPassword, register);
router.post("/login", login);

module.exports = router;
