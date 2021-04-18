const express = require('express');
const router = express.Router();
const controllers = require('../controllers/users.controller');

//get all users
router.get('/', controllers.getAll);

//create a user
router.post('/',  controllers.create);

//get specific user
router.get('/:id', controllers.specific);

//delete a user
router.delete('/:id', controllers.delete);

//update a user
router.patch('/:id', controllers.edit);
module.exports = router;