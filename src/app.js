const express = require('express');
const path = require('path');

/*const index = require('./routes/index');

const login = require('./routes/login');

const productCart = require('./routes/productCart');

const productDetail = require('./routes/productDetail');

const registro = require('./routes/registro');

const crearPorducto = require('./routes/crearProducto'); */


const app = express();


app.use(express.static(path.join(__dirname, '../public'))); 
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas


/*app.use ('/', index);

app.use('/', login);

app.use('/', productCart);

app.use('/', productDetail);

app.use('/', registro);

app.use('/', crearPorducto);*/



// requerir rutas products y usar app.use

const mainRouter = require('./routes/products');
app.use('/', mainRouter); 

app.listen('3000', () => {
    console.log('Servidor funcionando');
});