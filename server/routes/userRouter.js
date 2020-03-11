const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController.js');

// functionality for creating a new user and storing user in database
router.post('/register', userController.createUser, (req, res) => {
  res.json(res.locals.username);
});

// funcionality for logging user in
router.post('/login', userController.login);

// functionality for logging user out
router.get('/logout', userController.logout);

module.exports = router;
