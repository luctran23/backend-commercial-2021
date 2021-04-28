const express = require('express');
const router = express.Router();
const controllers = require('../controllers/brands.controller');

//get all brands
router.get('/', controllers.getAllBrands);

//create a brand
router.post('/',  controllers.createBrand);

//get specific brand
router.get('/:id', controllers.specificBrand);

//delete a brand
router.delete('/:id', controllers.deleteBrand);

//update a brand
router.patch('/:id', controllers.editBrand);
module.exports = router;