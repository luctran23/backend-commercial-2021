const express = require('express');
const router = express.Router();
const controllers = require('../controllers/allProducts.controller');

//get all products
router.get('/', controllers.getAll);

//specific product
router.get('/:id', controllers.specific)

module.exports = router;