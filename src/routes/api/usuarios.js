const express = require('express');
const router = express.Router();
const usuariosController = require('../../controllers/api/usuariosController');

router.get('/', usuariosController.listar);
router.get('/ultimo', usuariosController.ultimoUsuario);
router.get('/:id', usuariosController.detail);



module.exports = router;
