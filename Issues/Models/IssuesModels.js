const db = require("../../data/dbConfig");

function get() {
  return db("issues")
    .select(
      "issues.id",
      "issues.description",
      "issues.latitude",
      "issues.longitude",
      "issues.imgURL",
      "users.first_name",
      "users.last_name"
    )
    .count("votes.user_id as votes")
    .leftJoin("votes", "votes.issue_id", "issues.id")
    .leftJoin("users", "users.id", "issues.user_id")
    .groupBy("issues.id", "issues.description", "users.first_name", "users.last_name")
    .then(arr => arr.sort((a,b) => a.id - b.id));
}

function getByID(id) {
    return db("issues")
    .select(
      "issues.id",
      "issues.description",
      "issues.latitude",
      "issues.longitude",
      "issues.imgURL",
      "users.first_name",
      "users.last_name"
    )
    .where("issues.id", id)
    .count("votes.user_id as votes")
    .leftJoin("votes", "votes.issue_id", "issues.id")
    .leftJoin("users", "users.id", "issues.user_id")
    .groupBy("issues.id", "issues.description", "users.first_name", "users.last_name")
    .first();
}

function insertIssue(issue){
    return db("issues")
        .insert(issue)
        .returning("*")
}

function deleteIssue(id){
    return db("issues")
    .where({id})
    .del()
    .then(bool => bool ? "SUCCESS: Issue Deleted" : "ERROR: Issue not deleted")
}

function updateIssue(id, issue){
  return db("issues")
    .where({id})
    .update(issue)
    .returning("*")
}

module.exports = {
  get, getByID, insertIssue, deleteIssue, updateIssue
};
