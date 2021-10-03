const path = require('path');

let productCartController = {
    productCart : function (req, res) {
        res.render(path.resolve(__dirname, '../views/products/productCart'));
    }

}

module.exports = productCartController;