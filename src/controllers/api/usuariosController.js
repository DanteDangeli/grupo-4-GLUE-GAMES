const { sequelize } = require('../../../database/models');
const db = require('../../../database/models');
const Op = db.Sequelize.Op;

const usuariosController = {
    listar: (req, res) => {
        db.Usuarios.findAll({
            limit:105,
            offset:900
        })
        .then(usuarios => {
            res.json({
                usuariosTotal: usuarios.length,
                data: usuarios,
                status: 200
            })
        })
    },
    crear: (req, res) => {
        db.Usuarios.create(req.body)
        .then(
            res.json({
                mensaje: 'producto creado',
                producto: req.body,
                status: 200
            })
        )
    },
    detail: (req, res)=>{
        let userId = req.params.id;
        db.Usuarios.findByPk(userId)
        .then(user => {
            res.json({
                data: user,
                status: 200
            })
        })
    },
    ultimoUsuario: (req,res)=>{
        db.Usuarios.max('id')
        .then(usuario => {
            db.Usuarios.findByPk(usuario)
            .then(ultimo => {
                res.json({
                    data: ultimo
                })
            })
        })
    }
        
}

module.exports = usuariosController;