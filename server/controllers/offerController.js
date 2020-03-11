const db = require('../models/db.js');

const OfferController = {};

OfferController.createOffer = (req, res) => {
  console.log('made it to createOffer!');
  const queryString = 'INSERT INTO Offers (description, username, group_id) VALUES ($1, $2, $3)';
  const values = [req.body.description, req.body.username, req.body.group_id];

  res.locals.description = req.body.description;
  res.locals.group_name = req.body.group_name;

  // db.query to add new offer to the Offers table
  db.query(queryString, values, (error, response) => {
    if (error) {
      return next({
        log: error,
        message: {
          'Error in database query. Check log for more information.',
        },
      });
    }
    return console.log(`${res.locals.description} was successfully created in ${res.locals.group_name}`);
  });
};

// TODO add functionality to delete offer
// OfferController.deleteOffer = (req, res, next) => {
//   console.log('made it to deleteOffer!');
// };

module.exports = OfferController;
