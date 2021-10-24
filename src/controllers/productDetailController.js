const path = require('path');

let productDetailController = {
    productDetail : function (req, res) {
        res.render(path.resolve(__dirname, '../views/products/productDetail'));
    }

}

