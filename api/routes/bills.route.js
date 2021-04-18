const express = require('express');
const router = express.Router();
const controllers = require('../controllers/bills.controller');

//get all bills
router.get('/', controllers.getAll);

//create a bill
router.post('/',  controllers.create);

//get specific bill
router.get('/:id', controllers.specific);

//delete a bill
router.delete('/:id', controllers.delete);

//update a bill
router.patch('/:id', controllers.edit);
module.exports = router;