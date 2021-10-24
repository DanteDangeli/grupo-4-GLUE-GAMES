const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
const productsFilepath = path.join(__dirname, '../data/productsDatabase.json');
const products = JSON.parse(fs.readFileSync(productsFilepath,'utf-8'));


const controller = {
    // ruta a todos los productos
index: (req, res) => {
    res.render('index', {products})
}
};

module.exports= controller;
=======
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
>>>>>>> 3388d7cc3fdc878185dabb4ba2a528b44da67a4f
