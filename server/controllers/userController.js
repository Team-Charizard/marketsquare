const bcrypt = require('bcrypt');
const db = require('../models/db.js');
// salt rounds are how many times password will run through hash function
const roundsOfSalt = 10;

const UserController = {};

UserController.createUser = (req, res, next) => {
  // encrypt pw with bcrypt and save hashed pw in database
  bcrypt.hash(req.body.password, roundsOfSalt, (err, hash) => {
    if (err) {
      return next({
        log: err,
        message: {
          err: 'Error in bcrypt middleware. Check logs for further info',
        },
      });
    }
    // if no error, create user row in user user table in db
    const queryString =
      'INSERT INTO Users (email, username, hash) VALUES ($1, $2, $3)';
    const values = [req.body.email, req.body.username, hash];

    res.locals.username = req.body.username;

    // create new user row in User table
    db.query(queryString, values, (error, response) => {
      if (error) {
        return next({
          log: error,
          message: {
            err: 'Error in database query. Check log for more information.',
          },
        });
      }
      console.log(
        `${res.locals.username} created successfully in database :-)`,
      );
      return next();
    });
  });
};

UserController.login = (req, res, next) => {
  console.log('inside UserController.login');
  const queryString = 'SELECT * from Users WHERE username = $1';
  const values = [req.body.username];

  // verify user in User table
  db.query(queryString, values, (err, response) => {
    if (err) {
      return next({
        log: err,
        message: {
          err: 'Error in database query. Check log for error message',
        },
      });
    }
    // if user row is empty return an error message
    if (response.rows.length < 1) {
      return res.json({ errorMessage: 'Username or password is incorrect' });
    }
    // variable for hashed pw stored in returned user row
    const { hash } = response.rows[0];

    // bcrypt compare password method
    bcrypt.compare(req.body.password, hash, (err, result) => {
      if (err) {
        return next({
          log: err,
          message: {
            err: 'Error in bcrypt middleware. Check log for more information.',
          },
        });
      }
      // check if given password matches a hashed pw in database
      if (!result) {
        return res.json({ errorMessage: 'Incorrect username or password.' });
      }
      res.locals.username = req.body.username;
      return next();
    });
  });
};

UserController.logout = (req, res, next) => {
  // functionality to log user out
  console.log('made it to UserController.logout');
};

module.exports = UserController;
