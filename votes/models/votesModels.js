const db = require("./../../data/dbConfig");
const issues = require("./../../issues/models/issuesModels")

function getVote(vote) {
  return db("votes").where(vote);
}

function insertVote(vote) {
  return db("votes")
    .insert(vote)
    .returning("issue_id")
    .then(([id]) => issues.getByID(id))
}

function removeVote(vote) {
  return db("votes")
    .where(vote)
    .del()
    .then(bool =>
      bool
        ? { isDeleted: true, msg: "SUCCESS: Issue Deleted" }
        : { isDeleted: false, msg: "Error: Issue not Deleted" }
    );
}

module.exports = { insertVote, removeVote, getVote };
