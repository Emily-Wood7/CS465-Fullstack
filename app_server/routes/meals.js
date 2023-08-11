var express = require('express');
var router = express.Router();
const controller = require('../controllers/meals');

/* GET home page. */
<<<<<<< HEAD
router.get('/', controller.mealsList);
=======
router.get('/', controller.meals);
>>>>>>> main

module.exports = router;