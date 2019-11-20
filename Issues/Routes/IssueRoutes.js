const router = require("express").Router();

// Middlewares
const { authenticate } = require("../../Authentication/Middleware/authenticate");
const { validateID } = require("../Middlewares/validateID");

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
router.get("/issues/:id",validateID, getIssueByID);

// Routes below must provide Authentication Header with valid token
router.post("/issues", authenticate, postIssue);
router.put("/issues/:id", authenticate, validateID, editIssue);
router.delete("/issues/:id", authenticate, validateID, deleteIssue);

module.exports = router;
