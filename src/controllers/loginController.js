const path = require('path');

let loginController = {
    login : function (req, res) {
        res.render(path.resolve(__dirname, '../views/login'));
    }

}

module.exports = loginController;