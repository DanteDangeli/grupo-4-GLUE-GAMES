<<<<<<< HEAD
// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
let productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index);

module.exports= router;
=======
const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.productsList);
router.get('/detail/:id', productsController.detail);
router.get('/productCart', productsController.cart);


module.exports=router;
>>>>>>> 3388d7cc3fdc878185dabb4ba2a528b44da67a4f
