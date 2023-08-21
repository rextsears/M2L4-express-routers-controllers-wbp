var express = require('express');
var router = express.Router();
var eateries= require('../controllers/eateries');

router.get('/', eateries.index);

router.get('/:id', eateries.show);

router.get('/', eateries.index);

router.get('/:id', eateries.show); 

module.exports = router;
