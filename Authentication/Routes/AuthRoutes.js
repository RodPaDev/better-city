const router = require("express").Router();
const { getAllUsers, register, login } = require("../Controllers/AuthControllers");
const { validateForm } = require("../Middleware/ValidateForm");
const { uniqueContactInfo } = require("../Middleware/UniqueEmail");
const { hashPassword } = require("../Middleware/hashPassword");


router.get("/users", getAllUsers);
router.post("/register", validateForm, uniqueContactInfo, hashPassword, register);
router.post("/login", login);


module.exports = router;
