const router = require("express").Router();

// Controllers
const {
  getAllIssues,
  getIssueByID,
  postIssue,
  editIssue,
  deleteIssue
} = require("../Controllers/IssueController");

// Authentication Routes
router.get("/issues", getAllIssues);
router.get("/issues/:id", getIssueByID)
router.post("/issues", postIssue)
router.put("/issues/:id", editIssue)
router.delete("/issues/:id", deleteIssue)

module.exports = router;
