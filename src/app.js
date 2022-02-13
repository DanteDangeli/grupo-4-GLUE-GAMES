// requires *** requiriendo los modulos a utilizar
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session')
const cookies = require('cookie-parser');

// express()
const app = express();

//habilitar las malditas politicas de cors de la puta app
app.use(function(req,res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept');
	next();
});

// sistema de session
app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

// seteo de middlewares

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

// middlewares
app.use(cookies());
app.use(userLoggedMiddleware);

app.use(express.static(path.join(__dirname,'../public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));


// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// sistema de rutas --> "requiriendo las rutas"
const mainRouter = require('./routes/main');
const wipController = require('./routes/wip');
const productsController = require('./routes/products');
const adminProductsController = require('./routes/adminProducts');
const usersController = require('./routes/users');
const usuariosApi = require('./routes/api/usuarios');
const productosApi = require('./routes/api/products');



// usando las rutas requeridas ---> puntos de entrada
app.use('/', mainRouter);
app.use('/wip', wipController);
app.use('/products', productsController);
app.use('/admin', adminProductsController);
app.use('/user', usersController);
app.use('/usuariosApi', usuariosApi);
app.use('/productosApi', productosApi);


// error 404 y pagina de error
app.use((req, res, next) => {
    res.status(404).render("error404")
})

// levantando el servidor

app.listen(4000, ()=>{
    console.log('servidor en marcha...puerto 4000')
})

