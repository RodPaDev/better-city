exports.up = async function(knex, Promise) {
    await knex.schema.createTable("users", tbl => {
        tbl.increments();
        tbl.text("email").notNullable().unique();
        tbl.text("password").notNullable();
        tbl.text("first_name").notNullable();
        tbl.text("last_name").notNullable();
        tbl.integer("phone").notNullable().unique();
    });
}

exports.down = async function(knex, Promise) {
    await knex.schema.dropTableIfExists("users")
}