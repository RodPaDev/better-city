const router = require("express").Router();

// Controllers
const { getAllIssues } = require("../Controllers/IssueController");

// Authentication Routes
router.get("/issues", getAllIssues);


module.exports = router;
