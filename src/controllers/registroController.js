const path = require('path');

let registroController = {
    registro : function (req, res) {
        res.render(path.resolve(__dirname, '../views/registro'));
    }

}

module.exports = registroController;