var express = require('express');
var router = express.Router();
const controller = require('../controllers/rooms');

/* GET home page. */
<<<<<<< HEAD
router.get('/', controller.roomsList);
=======
router.get('/', controller.rooms);
>>>>>>> main

module.exports = router;