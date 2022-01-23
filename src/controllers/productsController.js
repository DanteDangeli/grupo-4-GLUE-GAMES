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
    productSearch:(req, res) =>{
       let buscar =req.query.buscar;
       db.Productos.findAll({
           where:{
               nombre: {[Op.like]:'%' + buscar + '%' }
           }
       })
       .then(productos => {res.render('../views/products/listadoBusqueda.ejs', {productos})} )
    },
    listarDepartamento1: (req, res)=>{
        db.Productos.findAll({
            where:{
                id_departamento: 1
            }
        })
        .then(productos => {res.render('../views/products/listadoProductosDepartamento.ejs', {productos})} )
    },
    listarDepartamento2: (req, res)=>{
        db.Productos.findAll({
            where:{
                id_departamento: 2
            }
        })
        .then(productos => {res.render('../views/products/listadoProductosDepartamento.ejs', {productos})} )
    },
    listarDepartamento3: (req, res)=>{
        db.Productos.findAll({
            where:{
                id_departamento: 3
            }
        })
        .then(productos => {res.render('../views/products/listadoProductosDepartamento.ejs', {productos})} )
    },
    listarDepartamento4: (req, res)=>{
        db.Productos.findAll({
            where:{
                id_departamento: 4
            }
        })
        .then(productos => {res.render('../views/products/listadoProductosDepartamento.ejs', {productos})} )
    },
    categoria1: (req, res)=>{
        db.Productos.findAll({
            where:{
                id_categoria: 1
            }
        })
        .then(productos => {res.render('../views/products/listadoProductosDepartamento.ejs', {productos})} )
    },
    categoria2: (req, res)=>{
        db.Productos.findAll({
            where:{
                id_categoria: 2
            }
        })
        .then(productos => {res.render('../views/products/listadoProductosDepartamento.ejs', {productos})} )
    },
    categoria3: (req, res)=>{
        db.Productos.findAll({
            where:{
                id_categoria: 3
            }
        })
        .then(productos => {res.render('../views/products/listadoProductosDepartamento.ejs', {productos})} )
    },
    categoria4: (req, res)=>{
        db.Productos.findAll({
            where:{
                id_categoria: 4
            }
        })
        .then(productos => {res.render('../views/products/listadoProductosDepartamento.ejs', {productos})} )
    },
    categoria5: (req, res)=>{
        db.Productos.findAll({
            where:{
                id_categoria: 5
            }
        })
        .then(productos => {res.render('../views/products/listadoProductosDepartamento.ejs', {productos})} )
    },
    categoria6: (req, res)=>{
        db.Productos.findAll({
            where:{
                id_categoria: 6
            }
        })
        .then(productos => {res.render('../views/products/listadoProductosDepartamento.ejs', {productos})} )
    },
    categoria7: (req, res)=>{
        db.Productos.findAll({
            where:{
                id_categoria: 7
            }
        })
        .then(productos => {res.render('../views/products/listadoProductosDepartamento.ejs', {productos})} )
    }
}

module.exports=controller;
