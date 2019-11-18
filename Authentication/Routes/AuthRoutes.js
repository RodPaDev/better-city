const router = require("express").Router();
const { getAllUsers, register } = require("../Controllers/AuthControllers");
const {validateForm} = require("../Middleware/ValidateForm");
const {uniqueContactInfo} = require("../Middleware/UniqueEmail");

router.get("/auth", getAllUsers);
router.post("/auth",validateForm, uniqueContactInfo, register);

module.exports = router;