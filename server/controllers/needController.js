const db = require('../models/db.js');

const NeedController = {};

NeedController.createNeed = (req, res, next) => {
  console.log('made it to createNeed!');
};

NeedController.deleteNeed = (req, res, next) => {
  console.log('made it to deleteNeed!');
};

module.exports = NeedController;
