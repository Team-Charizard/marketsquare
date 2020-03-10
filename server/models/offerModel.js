// pgsql model for our user database
const createTable = `CREATE TABLE IF NOT EXISTS Offers(
  id SERIAL PRIMARY KEY,
  description VARCHAR NOT NULL,
  user_id VARCHAR NOT NULL,
  group_id VARCHAR NOT NULL
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

// export query string to be used when server first runs
module.exports = createTable;
