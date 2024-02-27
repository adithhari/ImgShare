const pgp = require("pg-promise")();

const pgPool = pgp({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432, // default Postgres port
  database: "imagur"
});

module.exports = {
  query: (text, params) => pgPool.query(text, params)
};
