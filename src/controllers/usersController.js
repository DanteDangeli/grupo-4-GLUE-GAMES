const path = require('path');

const controller = {
    login: (req, res)=>{
    let pathLogin = path.join(__dirname, '../views/users/login.ejs')
       res.render(pathLogin) 
    },
    registro: (req, res)=>{
        let pathregistro = path.join(__dirname, '../views/users/registro.ejs')
           res.render(pathregistro) 
        }
};

module.exports=controller;