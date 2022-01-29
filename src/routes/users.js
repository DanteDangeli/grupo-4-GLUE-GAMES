const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require ("path")

const userController = require('../controllers/usersController');

// Middlewares
const upload = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');



// Formulario de registro
router.get('/registro',guestMiddleware,userController.registro);

// Crear usuario
router.post('/registro',upload.single("fotoPerfil"),validations,userController.createUser);

// Formulario de login
router.get('/login', guestMiddleware,userController.login);

// Procesar login
router.post('/login', userController.loginProcess);

// Perfil de usuario
router.get('/profile',authMiddleware,userController.profile);
router.get('/editar/:id',authMiddleware, userController.editarForm);
router.post('/editar/:id',authMiddleware,upload.single("fotoPerfil"),userController.editar);

// Logout
router.get('/logout', userController.logout);

module.exports=router;