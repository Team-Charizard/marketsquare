const db = require('../models/db.js');

const NeedController = {};

NeedController.createNeed = (req, res, next) => {
  console.log('made it to createNeed!');
  const queryString =
    'INSERT INTO Needs (description, username, group_id) VALUES ($1, $2, $3)';
  const values = [req.body.description, req.body.username, req.params.group_id];

  res.locals.description = req.body.description;
  res.locals.group_id = req.params.group_id;
  res.locals.username = req.body.username;

  // db.query to add new offer to the Offers table
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
      `${res.locals.description} successfully created in ${res.locals.group_id} by ${res.locals.username}`,
    );
    return res.json({
      message: `${res.locals.description} successfully created in ${res.locals.group_id} by ${res.locals.username}`,
    });
  });
};

NeedController.deleteNeed = (req, res, next) => {
  console.log('made it to deleteNeed!');
};

module.exports = NeedController;
