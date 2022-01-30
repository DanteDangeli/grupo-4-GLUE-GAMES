const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.productsList);
router.get('/detail/:id', productsController.detail);
router.get('/productCart', productsController.cart);
router.get('/search', productsController.productSearch);
router.get('/departamento1', productsController.listarDepartamento1);
router.get('/departamento2', productsController.listarDepartamento2);
router.get('/departamento3', productsController.listarDepartamento3);
router.get('/departamento4', productsController.listarDepartamento4);
router.get('/categoria1', productsController.categoria1);
router.get('/categoria2', productsController.categoria2);
router.get('/categoria3', productsController.categoria3);
router.get('/categoria4', productsController.categoria4);
router.get('/categoria5', productsController.categoria5);
router.get('/categoria6', productsController.categoria6);
router.get('/categoria7', productsController.categoria7);
router.get('/categoria8', productsController.categoria8);
router.get('/categoria9', productsController.categoria9);
router.get('/categoria10', productsController.categoria10);
router.get('/categoria11', productsController.categoria11);
router.get('/todos', productsController.todos);



module.exports=router;
