const db = require('../models/db.js');

const OfferController = {};

OfferController.createOffer = (req, res, next) => {
  console.log('made it to createOffer!');
};

OfferController.deleteOffer = (req, res, next) => {
  console.log('made it to deleteOffer!');
};

module.exports = OfferController;
