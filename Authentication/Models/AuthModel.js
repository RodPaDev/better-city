const db = require("../../data/dbConfig");
const bcrypt = require("bcryptjs");

function get() {
  return db("users");
}

function insert(user) {
  return db("users")
    .insert(user)
    .returning("id")
    .then(([id]) => db("users").where({ id }));
}

function login(credentials) {
  return db("users")
    .where("email", credentials.email)
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(credentials.password, user.password)) {
        delete user.password;
        return user;
      } else {
        return "Your email or your password is incorrect.";
      }
    });
}

module.exports = {
  get,
  insert,
  login
};
