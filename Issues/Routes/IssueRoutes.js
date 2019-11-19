const router = require("express").Router();

// Controllers
const {
  getAllIssues,
  getIssueByID,
  postIssue,
  editIssue,
  deleteIssue
} = require("../Controllers/IssueController");

// Issues Routes
router.get("/issues", getAllIssues);

// Routes below must provide Authentication Header with valid token
router.get("/issues/:id", getIssueByID);
router.post("/issues", postIssue);
router.put("/issues/:id", editIssue);
router.delete("/issues/:id", deleteIssue);

module.exports = router;
