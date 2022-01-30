// requires
const express = require('express');
const router = express.Router();

// controller requires
const wipController = require('../controllers/wipController');

router.get('/', wipController.wip);

module.exports=router;