const router = require("express").Router();

// Middlewares
const { authenticate } = require("../../Authentication/Middleware/authenticate");


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
router.get("/issues/:id", getIssueByID);

// Routes below must provide Authentication Header with valid token
router.post("/issues", authenticate, postIssue);
router.put("/issues/:id", authenticate, editIssue);
router.delete("/issues/:id", authenticate, deleteIssue);

module.exports = router;
