const express = require('express');
const router = express.Router();
const usuariosController = require('../../controllers/api/usuariosController');

router.get('/', usuariosController.listar);


module.exports = router;