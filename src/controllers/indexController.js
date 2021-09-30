const path = require('path');


let indexController = {
    index : function (req, res) {
        res.render(path.resolve(__dirname, '../views/index'));
    }

}

module.exports = indexController;