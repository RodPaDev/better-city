const db = require("../../data/dbConfig");

function get() {
  return db("users");
}

function insert(user) {
  return db("users")
    .insert(user)
    .returning("id")
    .then(([id]) => db("users").where({ id }));
}

module.exports = {
  get,
  insert
};
