const express = require('express');

const router = express.Router();

const offerController = require('../controllers/offerController.js');

/**
 * @param id is the user_id of the current user
 */
router.post('/create/:id', offerController.createOffer);

// funcionality for deleting an offer
// router.post('/delete', offerController.deleteOffer);

// TODO functionality for editing an offer
// router.get('/edit', offerController.editOffer);

module.exports = router;
