// pgsql model for our members database

const createTable = `CREATE TABLE IF NOT EXISTS Members(
  id SERIAL PRIMARY KEY,
  user_id VARCHAR NOT NULL,
  group_id VARCHAR NOT NULL,
  group_name VARCHAR NOT NULL
)`;

// export query string to be used when server first runs
module.exports = createTable;
