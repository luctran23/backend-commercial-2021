const express = require('express');
const router = express.Router();
const controllers = require('../controllers/news.controller');

//get all news
router.get('/', controllers.getAll);

//create a news
router.post('/',  controllers.create);

//get specific news
router.get('/:id', controllers.specific);

//delete a news
router.delete('/:id', controllers.delete);

//update a news
router.patch('/:id', controllers.edit);
module.exports = router;