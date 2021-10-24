const path = require('path');

let CrearProductoController = {
    crearProductForm : function (req, res) {
        res.render(path.resolve(__dirname, '../views/users/crearProducto.ejs'));
    }

}

