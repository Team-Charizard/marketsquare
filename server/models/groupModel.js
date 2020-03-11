// pgsql model for our group database

// the user that creates the group will be automatically added as admin
const createTable = `CREATE TABLE IF NOT EXISTS Groups(
  id SERIAL PRIMARY KEY,
  group_name VARCHAR NOT NULL,
  group_admin_id INTEGER NOT NULL
)`;

// export query string to be used when server first runs
module.exports = createTable;
