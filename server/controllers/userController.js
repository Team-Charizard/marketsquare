const db = require('../models/db.js');
const bcrypt = require('bcrypt');
// salt rounds are how many times password will run through hash function
const roundsOfSalt = 10;

const UserController = {};

UserController.createUser = (req, res, next) => {
  // functionality to create a user
};

UserController.login = (req, res, next) => {
  // functionality to log user in
};

UserController.logout = (req, res, next) => {
  // functionality to log user out
};

module.exports = UserController;