const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const adminProductsController = require('../controllers/adminProductsController');
// multer config
let diskStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        let carpetaAlmacenamiento = path.join(__dirname, '../../public/images');
        cb(null, carpetaAlmacenamiento);
    },
    filename: (req, file, cb)=>{
        let imageName = Date.now() + '-prueba-' + path.extname(file.originalname);
        cb(null, imageName);
    }
});
const upload = multer({storage: diskStorage});

// routes
router.get('/products/create', adminProductsController.crearProductoForm)
router.post('/products/create', upload.single('fotoProducto') , adminProductsController.crearProducto);
router.get('/products/edit/:id', adminProductsController.editarProductoForm);
router.put('/products/edit/:id', adminProductsController.editar);
router.delete('/products/delete/:id', adminProductsController.deleteProduct);

module.exports=router;