const express = require('express');

const router = express.Router();

const CrearProductoController = require('../controllers/crearProducto');

router.get('/crear/producto', CrearProductoController.crearProductForm);

module.exports = router;