// requires
const express = require('express');
const router = express.Router();

// controller requires
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);

module.exports=router;