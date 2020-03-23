const express = require('express');

const router = express.Router();

const groupController = require('../controllers/groupController.js');

// functionality to get all groups they are admin of
router.get('/owned/:id', groupController.getOwnedGroups);

// functionality to get all groups a user is a member of
router.get('/member/:id', groupController.getMemberGroups);

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
