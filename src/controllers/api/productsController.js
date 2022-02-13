const db = require('../../../database/models');

const productsController = {
    listar: (req, res) => {
        db.Productos.findAll({
           
        })
        .then(productos => {
            res.json({
                productsTotal: productos.length,
                data: productos,
                status: 200
            })
        })
    },
    detail: (req, res)=>{
        let productId = req.params.id;
        db.Productos.findByPk(productId)
        .then(product => {
            res.json({
                data: product,
                status: 200
            })
        })
    },
    ultimoProducto: (req,res)=>{
        db.Productos.max('id')
        .then(producto => {
            db.Productos.findByPk(producto)
            .then(ultimo => {
                res.json({
                    data: ultimo
                })
            })
        })
    }
}

module.exports = productsController;