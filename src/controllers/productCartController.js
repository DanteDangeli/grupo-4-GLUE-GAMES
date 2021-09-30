const path = require('path');

let productCartController = {
    productCart : function (req, res) {
        res.render(path.resolve(__dirname, '../views/productCart'));
    }

}

module.exports = productCartController;