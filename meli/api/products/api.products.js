var express = require('express');
var controller = require('../../controllers/products/controller.products.js');


var router = express.Router();
router.get('/', controller.index);
router.get('/:id', controller.show);

module.exports = router;