const router = require("express").Router();

// Middlewares
const { authenticate } = require("./../../authentication/middleware/authenticate");
const { validateID } = require("./../middlewares/validateID");
const { validateUserID } = require("./../../users/middlewares/validateUserID");
const { validateForm } = require("./../middlewares/validateForm");


// Controllers
const {
  getAllIssues,
  getIssueByID,
  postIssue,
  editIssue,
  deleteIssue
} = require("./../controllers/issueController");

// Issues Routes
router.get("/issues", getAllIssues);
router.get("/issues/:id",validateID, getIssueByID);

// Routes below must provide Authentication Header with valid token
router.post("/issues", authenticate,validateUserID, validateForm, postIssue);
router.put("/issues/:id", authenticate, validateID, validateUserID, validateForm, editIssue);
router.delete("/issues/:id", authenticate, validateID, deleteIssue);

module.exports = router;
