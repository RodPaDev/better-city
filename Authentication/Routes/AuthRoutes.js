const router = require("express").Router();

// Controllers
const {
  getAllUsers,
  register,
  login
} = require("../Controllers/AuthControllers");

// Middlewares
const { validateForm } = require("../Middleware/ValidateForm");
const { uniqueContactInfo } = require("../Middleware/UniqueEmail");
const { hashPassword } = require("../Middleware/hashPassword");

// Authentication Routes
router.post("/register", validateForm, uniqueContactInfo, hashPassword, register);
router.post("/login", login);

module.exports = router;
