const express = require('express');

const router = express.Router();

const needController = require('../controllers/needController.js');

// functionality for creating needs
router.post('/create/:group_id', needController.createNeed);

// functionality for getting needs as an array of objects
router.get('/:group_id', needController.getNeeds);

// funcionality for deleting an offer
// router.post('/delete/:group_id', needController.deleteOffer);

// TODO functionality for editing an offer
// router.get('/edit/group_id', needController.editOffer);

module.exports = router;