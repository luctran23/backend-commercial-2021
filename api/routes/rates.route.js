const express = require('express');
const router = express.Router();
const controllers = require('../controllers/rates.controller');

//get all rates
router.get('/', controllers.getAll);

//create a rate
router.post('/',  controllers.create);

//get specific rate
router.get('/:id', controllers.specific);

//delete a rate
router.delete('/:id', controllers.delete);

//update a rate
router.patch('/:id', controllers.edit);
module.exports = router;