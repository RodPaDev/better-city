const db = require("../../data/dbConfig");

function getById(id) {
  return db("users")
    .select("first_name", "last_name", "phone", "email")
    .where({ id })
    .first();
}

function deleteUser(id) {
    return db("users")
        .where({ id })
        .del()
}

function updateUserInfo(id, info){
    return db("users")
        .where({id})
        .update(info)
        .returning("*")
}

module.exports = { getById, deleteUser, updateUserInfo }