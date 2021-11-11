const express = require('express');
const router = express.Router();
const multer = require("multer");
const userController = require('../controllers/usersController');
const path = require ("path")

const diskStorage = multer.diskStorage ({
    destination: (req, file,cb) =>{
        cb (null, path.join(__dirname,"../../public/images/users"));
    },
    filename: (req, file, cb) => {
        const newFilename = "user-" + Date.now() + path.extname(file.originalname);
        cb (null, newFilename);
    }
})

const upload = multer ({storage: diskStorage})

router.get('/login', userController.login);
router.get('/registro',userController.registro);
router.post('/registro',upload.single("foto-perfil"),userController.createUser);

module.exports=router;