// pgsql model for our user database
const createTable = `CREATE TABLE IF NOT EXISTS Users(
  id SERIAL PRIMARY KEY,
  group_name VARCHAR NOT NULL
)`;

// export query string to be used when server first runs
module.exports = createTable;
