const db = require('../../../database/models');

const usuariosController = {
    listar: (req, res) => {
        db.Usuarios.findAll()
        .then(usuarios => {
            res.json({
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
    }
}

module.exports = usuariosController;