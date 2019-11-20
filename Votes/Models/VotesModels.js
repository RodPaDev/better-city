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
    .del();
}

module.exports = { insertVote, removeVote };
