const express = require('express');

const router = express.Router();

const groupController = require('../controllers/groupController.js');

// functionality for creating a new group
router.post(
  '/create/:id',
  groupController.createGroup,
  groupController.addAdmin,
);

// funcionality for deleting a group
router.post('/delete', groupController.deleteGroup);

// functionality to add a member to a group, :id is the group_admin's id
router.post(
  '/addmember/:id',
  groupController.findMemberId,
  groupController.findGroupId,
  groupController.checkIfAlreadyExists,
  groupController.addMember,
);

// functionality to delete a member from a group
router.post('/deletemember', groupController.deleteMember);

// TODO functionality for editing an offer
// router.get('/edit', offerController.editOffer);

module.exports = router;
