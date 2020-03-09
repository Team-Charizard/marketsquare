const db = require('../models/db.js');

const GroupController = {};

GroupController.createGroup = (req, res, next) => {
  console.log('made it to createGroup!');
};

GroupController.addMember = (req, res, next) => {
  console.log('made it to addMember!');
};

GroupController.deleteMember = (req, res, next) => {
  console.log('made it to deleteMember!');
};

module.exports = GroupController;