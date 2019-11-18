const router = require("express").Router();
const { getAllUsers, register } = require("../Controllers/AuthControllers");
const { validateForm } = require("../Middleware/ValidateForm");
const { uniqueContactInfo } = require("../Middleware/UniqueEmail");
const { hashPassword } = require("../Middleware/hashPassword");


router.get("/auth", getAllUsers);
router.post("/auth", validateForm, uniqueContactInfo, hashPassword, register);

module.exports = router;
