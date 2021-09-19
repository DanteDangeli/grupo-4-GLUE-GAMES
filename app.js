const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath));

app.listen('8000', () => {
    console.log('Servidor funcionando');
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})

app.get('/productDetail', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/productDetail.html'))
})

app.get('/productCart', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/productCart.html'))
})

app.get('/registro', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/registro.html'))
})

app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
