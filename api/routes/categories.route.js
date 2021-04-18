const express = require('express');
const router = express.Router();
const controllers = require('../controllers/categories.controller');

//get all categories
router.get('/', controllers.getAllCatetories);

//create a category
router.post('/',  controllers.createCategory);

//get specific category
router.get('/:id', controllers.specificCategory);

//delete a category
router.delete('/:id', controllers.deleteCategory);

//update a category
router.patch('/:id', controllers.editCategory);
module.exports = router;