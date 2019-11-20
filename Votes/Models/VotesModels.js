const db = require("../../data/dbConfig");

function getVote(vote) {
  return db("votes").where(vote);
}

function insertVote(vote) {
  return db("votes").insert(vote);
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

module.exports = { insertVote, removeVote };
