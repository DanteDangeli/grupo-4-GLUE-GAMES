// requires *** requiriendo los modulos a utilizar
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');


// express()
const app = express();

// middlewares
app.use(express.static(path.join(__dirname,'../public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));

// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// sistema de rutas --> "requiriendo las rutas"
const mainRouter = require('./routes/main');
const productsController = require('./routes/products');
const adminProductsController = require('./routes/adminProducts');
const usersController = require('./routes/users');



// usando las rutas requeridas ---> puntos de entrada
app.use('/', mainRouter);
app.use('/products', productsController);
app.use('/admin', adminProductsController);
app.use('/users', usersController);


// error 404 y pagina de error


// levantando el servidor

app.listen(3000, ()=>{
    console.log('servidor en marcha...')
})