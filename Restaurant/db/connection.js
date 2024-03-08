const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "RestaurantDB",
  password: "postgres",
  port: 5432,
  idleTimeoutMillis: 100,
});

module.exports = pool;
