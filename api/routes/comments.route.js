const express = require('express');
const router = express.Router();
const controllers = require('../controllers/comments.controller');

//get all comments
router.get('/', controllers.getAll);

//create a comment
router.post('/',  controllers.create);

//get specific comment
router.get('/:id', controllers.specific);

//delete a comment
router.delete('/:id', controllers.delete);

//update a comment
router.patch('/:id', controllers.edit);
module.exports = router;