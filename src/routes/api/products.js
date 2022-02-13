const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/api/productsController');

router.get('/', productsController.listar);
router.get('/ultimo', productsController.ultimoProducto);
router.get('/:id', productsController.detail);


module.exports = router;