
const path = require('path');
const db = require('../../database/models');



const controller = {
    crearProductoForm: (req, res)=>{
        let pathForm = path.join(__dirname, '../views/adminProducts/crearProducto.ejs');
        res.render(pathForm);
    },
    crearProducto: (req, res)=>{
       db.Productos.create({
           nombre: req.body.nombre,
           precio: req.body.precio,
           descripcion: req.body.descripcion,
           image: req.file.filename
       })
       .then((productoCreado)=>{
        res.redirect('/products/todos')
       })
    },
    editarProductoForm:(req, res)=>{
        let editarId = req.params.id;
        db.Productos.findOne({
            where:{
                id:editarId
            }
        })
        .then((producto)=>{
            res.render(path.join(__dirname, '../views/adminProducts/editarProducto.ejs'),{producto})
        })
       
    },
    editar:(req, res)=>{
        db.Productos.update({
            nombre:req.body.nombre,
            precio:req.body.precio,
            descripcion:req.body.descripcion,
            image:req.file.filename
        },{
            where:{
                id: req.params.id
            }
        }).then(()=>{
            res.redirect(`/products/detail/${req.params.id}`)
        })
    },
    deleteProduct:(req, res)=>{
        db.Productos.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(()=>{
            res.redirect('/products/todos')
        })
    }
    
    
   

};

module.exports=controller;