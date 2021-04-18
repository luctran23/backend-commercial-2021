const express = require('express');
const router = express.Router();
const controllers = require('../controllers/accessories.controller');

//get all accessories
router.get('/', controllers.getAll);

//create a accessory
router.post('/',  controllers.create);

//get specific accessory
router.get('/:id', controllers.specific);

//delete a accessory
router.delete('/:id', controllers.delete);

//update a accessory
router.patch('/:id', controllers.edit);
module.exports = router;