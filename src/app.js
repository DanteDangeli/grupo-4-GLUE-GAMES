// requires *** requiriendo los modulos a utilizar
const express = require('express');
const path = require('path');
<<<<<<< HEAD

/*const index = require('./routes/index');

const login = require('./routes/login');

const productCart = require('./routes/productCart');

const productDetail = require('./routes/productDetail');

const registro = require('./routes/registro');

const crearPorducto = require('./routes/crearProducto'); */

=======
const methodOverride = require('method-override');

>>>>>>> 3388d7cc3fdc878185dabb4ba2a528b44da67a4f

// express()
const app = express();

<<<<<<< HEAD

app.use(express.static(path.join(__dirname, '../public'))); 
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas


/*app.use ('/', index);
=======
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


>>>>>>> 3388d7cc3fdc878185dabb4ba2a528b44da67a4f

// usando las rutas requeridas ---> puntos de entrada
app.use('/', mainRouter);
app.use('/products', productsController);
app.use('/admin', adminProductsController);
app.use('/users', usersController);


// error 404 y pagina de error


<<<<<<< HEAD
app.use('/', crearPorducto);*/



// requerir rutas products y usar app.use

const mainRouter = require('./routes/products');
app.use('/', mainRouter); 
=======
// levantando el servidor
>>>>>>> 3388d7cc3fdc878185dabb4ba2a528b44da67a4f

app.listen(3000, ()=>{
    console.log('servidor en marcha...')
})