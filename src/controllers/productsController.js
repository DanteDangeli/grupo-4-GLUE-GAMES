const fs = require('fs');
const path = require('path');
const db = require('../../database/models');
const Op = db.Sequelize.Op;


const productFilepath = path.join(__dirname, '../json/productsDatabase.json');
const products = JSON.parse(fs.readFileSync(productFilepath, 'utf-8'));

const controller = {
    productsList: (req, res)=>{
        res.render('productsList', {products})
    },
    detail: (req, res)=>{
        let productId = req.params.id;
        let pathViewDetail = path.join(__dirname, '../views/products/productDetail.ejs');
        db.Productos.findByPk(productId)
        .then(product => {
            res.render(pathViewDetail, {product})
        })
        
    },
    cart: (req, res)=>{
        let pathCart= path.join(__dirname, '../views/products/productCart.ejs');
        res.render(pathCart)
        },
    listarCategoria:(req, res) =>{
        db.Productos.findAll({
            limit:200
        })
        .then(productos => {res.render('../views/products/listadoProductosCategorias.ejs', {productos})} )
        
    },
    productSearch:(req, res) =>{
        let busqueda = req.body.buscado;
        console.log

        db.Productos.findAll({
            where: {
                nombre: {[Op.like]: '%' + busqueda + '%'}
            }
        })
        .then(productos => {res.render('../views/products/listadoBusqueda.ejs', {productos})})
    }
    
};

module.exports=controller;
