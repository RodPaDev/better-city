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
    .groupBy("issues.id", "issues.description", "users.first_name", "users.last_name");
}

module.exports = {
  get
};
