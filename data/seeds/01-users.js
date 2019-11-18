const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        {
          id: 1,
          email: process.env.TEST_EMAIL,
          password: bcrypt.hashSync(process.env.TEST_PW),
          first_name: "Test",
          last_name: "Testing",
          phone: 31415926
        }
      ]);
    });
};
