require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection:{
      port: process.env.PG_PORT_DEV,
      database: process.env.PG_DB_DEV,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
};