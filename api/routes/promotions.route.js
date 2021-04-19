const express = require('express');
const router = express.Router();
const controllers = require('../controllers/promotions.controller');

//get all promotions
router.get('/', controllers.getAll);

//create a promotion
router.post('/',  controllers.create);

//get specific promotion
router.get('/:id', controllers.specific);

//delete a promotion
router.delete('/:id', controllers.delete);

//update a promotion
router.patch('/:id', controllers.edit);
module.exports = router;