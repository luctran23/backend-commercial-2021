const express = require('express');
const router = express.Router();
const controllers = require('../controllers/phones.controller');

//get all phones
router.get('/', controllers.getAll);

//create a phone
router.post('/',  controllers.create);

//get specific phone
router.get('/:id', controllers.specific);

//delete a phone
router.delete('/:id', controllers.delete);

//update a phone
router.patch('/:id', controllers.edit);
module.exports = router;