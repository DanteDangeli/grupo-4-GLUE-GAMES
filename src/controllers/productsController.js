const fs = require('fs');
const path = require('path');

const productFilepath = path.join(__dirname, '../data/productsDatabase.json');
const products = JSON.parse(fs.readFileSync(productFilepath, 'utf-8'));

const controller = {
    productsList: (req, res)=>{
        res.render('productsList', {products})
    },
    detail: (req, res)=>{
        let productId = req.params.id;
        let product = products.find(product => product.id == productId);
        let pathViewDetail = path.join(__dirname, '../views/products/productDetail.ejs');
        res.render(pathViewDetail, {product})
    },
    cart: (req, res)=>{
        let pathCart= path.join(__dirname, '../views/products/productCart.ejs');
        res.render(pathCart)
        }
    
};

module.exports=controller;
