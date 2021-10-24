const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDatabase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    crearProductoForm: (req, res)=>{
        let pathForm = path.join(__dirname, '../views/adminProducts/crearProducto.ejs');
        res.render(pathForm);
    },
    crearProducto: (req, res) => {
        let newProduct = {
            producto:req.body.producto,
            id:req.body.id,
            descripcion:req.body.descripcion,
            fotoProducto: req.file.filename,
            marca:req.body.marca,
            precio:req.body.precio,
            categorias:req.body.categoria,
            valoracion: req.body.valoracion,
            condicion:req.body.condicion
        };
    console.log(newProduct);
    products.push(newProduct);
    console.log('producto agregado');
    let productsJson = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, productsJson);
    console.log('producto cargado al jsonDataBase :)');
    res.redirect('/')
    },
    editarProductoForm: (req, res)=>{
        let pathForm =path.join(__dirname, '../views/adminProducts/editarProducto.ejs');
        let productId = req.params.id;
        let product = products.find(product => product.id == productId);
        res.render(pathForm, {product});
    },
    editar: (req, res)=>{
      let productId = req.params.id;
      let producAEdit = products.find(product => product.id == productId);
      console.log(producAEdit);
      let productEdit= {
        producto: producAEdit.producto = req.body.producto,
        descripcion: producAEdit.descripcion = req.body.descripcion,
        categoria: producAEdit.categoria = req.body.categoria,
        marca: producAEdit.marca = req.body.marca,
        precio: producAEdit.precio = req.body.precio,
        valoracion: producAEdit.valoracion = req.body.valoracion,
        condicion: producAEdit.condicion = req.body.condicion
      };
      console.log(productEdit);
      let productsEditJSON = JSON.stringify(products);
      fs.writeFileSync(productsFilePath, productsEditJSON);
      console.log('producto editado :) cuchau!');
      res.redirect('/')
    },
    deleteProduct: (req, res)=>{
        let productId= req.params.id;
        let productAELIM= products.find(product=>product.id == productId);
        console.log(productAELIM);
        let indiceProduct= products.indexOf(productAELIM);
        console.log('el producto se encuentra en el indice:', indiceProduct);
        products.splice(indiceProduct);
        let productsJSON = JSON.stringify(products);
        fs.writeFileSync(productsFilePath, productsJSON);
        console.log('producto eliminado :(');
        res.redirect('/')
    }

};

module.exports=controller;