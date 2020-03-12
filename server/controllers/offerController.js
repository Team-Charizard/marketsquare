const db = require('../models/db.js');

const OfferController = {};

OfferController.getOffers = (req, res, next) => {
  console.log('made it to getOffers');
  const queryString = 'SELECT * FROM Offers WHERE group_id = $1';
  const values = [req.params.group_id];

  // db.query to get all the offers in the given group
  db.query(queryString, values, (error, response) => {
    if (error) {
      return next({
        log: error,
        message: {
          err: 'Error in database query. Check log for more information',
        },
      });
    }
    console.log('OFFERS: ', response.rows);
    return res.json(response.rows);
  });
};

OfferController.createOffer = (req, res, next) => {
  console.log('made it to createOffer!');
  const queryString =
    'INSERT INTO Offers (description, username, group_id) VALUES ($1, $2, $3)';
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

// TODO add functionality to delete offer
// OfferController.deleteOffer = (req, res, next) => {
//   console.log('made it to deleteOffer!');
// };

module.exports = OfferController;
