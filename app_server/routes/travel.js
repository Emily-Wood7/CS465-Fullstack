var express = require('express');
var router = express.Router();
const controller = require('../controllers/travel');

/* GET home page. */
<<<<<<< HEAD
router.get('/', controller.travelList);
=======
router.get('/', controller.travel);
>>>>>>> main

module.exports = router;