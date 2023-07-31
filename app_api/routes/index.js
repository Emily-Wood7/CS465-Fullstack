const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const foodsController = require('../controllers/foods');
const roomsController = require('../controllers/rooms');

router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode);

router
    .route('/foods')
    .get(foodsController.foodsList);

router
    .route('/foods/:foodCode')
    .get(foodsController.foodsFindCode);

router
    .route('/rooms')
    .get(roomsController.roomsList);

router
    .route('/rooms/:roomCode')
    .get(roomsController.roomsFindCode);
    

module.exports = router;