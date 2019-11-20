exports.up = async function(knex, Promise) {
  await knex.schema.createTable("votes", tbl => {
    tbl
      .integer("issue_id")
      .notNullable()
      .references("id")
      .inTable("issues");
    tbl
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users");
    tbl.primary(["issue_id", "user_id"]);
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTableIfExists("votes");
};
