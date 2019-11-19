const router = require("express").Router();

// Controllers
const {
  getAllIssues,
  getIssueByID,
  postIssue,
  deleteIssue,
  editIssue
} = require("../Controllers/IssueController");

// Authentication Routes
router.get("/issues", getAllIssues);
router.get("/issues/:id", getIssueByID)
router.post("/issues", postIssue)

module.exports = router;
