const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.productsList);
router.get('/detail/:id', productsController.detail);
router.get('/productCart', productsController.cart);


module.exports=router;