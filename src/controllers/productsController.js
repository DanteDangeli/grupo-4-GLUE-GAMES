const fs = require('fs');
const path = require('path');

const productsFilepath = path.join(__dirname, '../data/productsDatabase.json');
const products = JSON.parse(fs.readFileSync(productsFilepath,'utf-8'));


const controller = {
    // ruta a todos los productos
index: (req, res) => {
    res.render('index', {products})
}
};

module.exports= controller;