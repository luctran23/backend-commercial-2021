const express = require('express');
const router = express.Router();
const controllers = require('../controllers/cameras.controller');

//get all cameras
router.get('/', controllers.getAll);

//create a camera
router.post('/',  controllers.create);

//get specific camera
router.get('/:id', controllers.specific);

//delete a camera
router.delete('/:id', controllers.delete);

//update a camera
router.patch('/:id', controllers.edit);
module.exports = router;