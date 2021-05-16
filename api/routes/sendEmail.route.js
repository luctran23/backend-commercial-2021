const express = require('express');
const router = express.Router();
const controllers = require('../controllers/sendEmail.controller');

//send email
router.post('/', controllers.send);



module.exports = router;