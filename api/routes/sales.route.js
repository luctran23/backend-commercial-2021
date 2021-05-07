const express = require('express');
const router = express.Router();
const controllers = require('../controllers/sales.controller');

//get all sales (sold products);
router.get('/', controllers.getAll);

// get specific sale by startdate and enddate
router.get('/:startDate&:endDate', controllers.specific);
module.exports = router;