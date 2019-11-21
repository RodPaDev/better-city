exports.up = async function(knex, Promise) {
  await knex.schema.createTable("issues", tbl => {
    tbl.increments();
    tbl.text("description").notNullable();
    tbl.decimal("latitude", 9, 6).notNullable();
    tbl.decimal("longitude", 9, 6).notNullable();
    tbl.text("imgURL").notNullable();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTableIfExists("issues");
};
