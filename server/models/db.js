const { Pool } = require('pg');

const userTable = require('./userModel.js');
const groupTable = require('./groupModel.js');
const offerTable = require('./offerModel.js');
const needTable = require('./needModel.js');
const memberTable = require('./memberModel.js');

const { PG_URI } = process.env;

// Create new instance of Pool
const pool = new Pool({
  connectionString: PG_URI,
});

// connect to the db via a pool
pool.on('connect', () => {
  console.log('Connected to the database!');
});

// running our queries to create necessary tables
pool.query(userTable, err => {
  if (err) console.log(err);
});

pool.query(groupTable, err => {
  if (err) console.log(err);
});

pool.query(offerTable, err => {
  if (err) console.log(err);
});

pool.query(needTable, err => {
  if (err) console.log(err);
});

pool.query(memberTable, err => {
  if (err) console.log(err);
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
