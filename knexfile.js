require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      port: process.env.DATABASE_DEV_PORT,
      database: process.env.DATABASE_DEV,
      user: process.env.DATABASE_DEV_USERNAME,
      password: process.env.DATABASE_DEV_PASSWORD
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: { directory: "./data/seeds" }
  },

  testing: {
    client: "pg",
    connection: {
      port: process.env.DATABASE_TEST_PORT,
      database: process.env.DATABASE_TEST,
      user: process.env.DATABASE_TEST_USERNAME,
      password: process.env.DATABASE_TEST_PASSWORD
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: { directory: "./data/seeds" }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: { directory: "./data/seeds" }
  }
};
