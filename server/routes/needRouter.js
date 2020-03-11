const express = require('express');

const router = express.Router();

const needController = require('../controllers/needController.js');

/**
 * @param id is the group_id here
 */
router.post('/create/:group_id', needController.createNeed);

// funcionality for deleting an offer
// router.post('/delete/:group_id', needController.deleteOffer);

// TODO functionality for editing an offer
// router.get('/edit/group_id', needController.editOffer);

module.exports = router;