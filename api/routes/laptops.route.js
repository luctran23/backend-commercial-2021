const express = require('express');
const router = express.Router();
const controllers = require('../controllers/laptops.controller');

//get all laptops
router.get('/', controllers.getAll);

//create a laptop
router.post('/',  controllers.create);

//get specific laptop
router.get('/:id', controllers.specific);

//delete a laptop
router.delete('/:id', controllers.delete);

//update a laptop
router.patch('/:id', controllers.edit);
module.exports = router;