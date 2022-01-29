const express = require('express');
const router = express.Router();
const multer = require('multer');
const { dirname } = require('path');
const path = require('path');

const adminProductsController = require('../controllers/adminProductsController')
const authMiddleware = require('../middlewares/authMiddleware');

// multer config
let diskStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        let carpetaAlmacenamiento = path.join(__dirname, '../../public/images');
        cb(null, carpetaAlmacenamiento);
    },
    filename: (req, file, cb)=>{
        let imageName =  Date.now() + '-prueba-' + path.extname(file.originalname);
        cb(null,imageName );
    }
});
const upload = multer({storage: diskStorage});

// routes
router.get('/products/create',authMiddleware, adminProductsController.crearProductoForm)
router.post('/products/create',authMiddleware, upload.single('fotoProducto') , adminProductsController.crearProducto);
router.get('/products/edit/:id',authMiddleware, adminProductsController.editarProductoForm);
router.post('/products/edit/:id',authMiddleware, upload.single('fotoProducto'), adminProductsController.editar);
router.delete('/products/delete/:id',authMiddleware, adminProductsController.deleteProduct);

module.exports=router;