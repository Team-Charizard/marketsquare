const express = require('express');

const router = express.Router();

const offerController = require('../controllers/offerController.js');

// functionality for creating a new offer
router.post('/create', offerController.createOffer);

// funcionality for deleting an offer
router.post('/delete', offerController.deleteOffer);

// TODO functionality for editing an offer
// router.get('/edit', offerController.editOffer);

module.exports = router;
