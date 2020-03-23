const express = require('express');

const router = express.Router();

const offerController = require('../controllers/offerController.js');

// functionality for creating offers
router.post('/create/:group_id', offerController.createOffer);

// functionality for getting offers as an array of objects
router.get('/:group_id', offerController.getOffers);

// funcionality for deleting an offer
// router.post('/delete', offerController.deleteOffer);

// TODO functionality for editing an offer
// router.get('/edit', offerController.editOffer);

module.exports = router;
