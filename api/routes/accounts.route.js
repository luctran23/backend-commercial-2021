const express = require('express');
const router = express.Router();
const controllers = require('../controllers/accounts.controller');

//get all accounts
router.get('/', controllers.getAll);

//create a account
router.post('/',  controllers.create);

//get specific account
router.get('/:id', controllers.specific);

//delete a account
router.delete('/:id', controllers.delete);

//update a account
router.patch('/:id', controllers.edit);
module.exports = router;