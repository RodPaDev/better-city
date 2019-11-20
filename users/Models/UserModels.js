const db = require("./../../data/dbConfig");

function getById(id){
    return db("users")
        .where({id})
        .returning("*")
        .then(([user]) => {
            delete user.password
            return user
        })
}

module.exports = { getById }