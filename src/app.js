const express = require('express');

const index = require('./routes/index');

const login = require('./routes/login');

const productCart = require('./routes/productCart');

const productDetail = require('./routes/productDetail');

const registro = require('./routes/registro');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use ('/', index);

app.use('/', login);

app.use('/', productCart);

app.use('/', productDetail);

app.use('/', registro);

app.listen('3000', () => {
    console.log('Servidor funcionando');
});