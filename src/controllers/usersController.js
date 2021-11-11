const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs")

const usersFilepath = path.join(__dirname, '../data/usersDatabase.json');
const users = JSON.parse(fs.readFileSync(usersFilepath, 'utf-8'));


const controller = {
   login: (req, res)=>{
      let pathLogin = path.join(__dirname, '../views/users/login.ejs')
      res.render(pathLogin) 
   },
   registro: (req, res)=>{
      let pathregistro = path.join(__dirname, '../views/users/registro.ejs')
      res.render(pathregistro)
   },

   createUser: (req,res) => {
      let newUser = {
         nombre: req.body.nombre,
         apellido: req.body.apellido,
         usuario: req.body.usuario,
         email: req.body.email,
         fechaNacimiento: req.body.fechaNacimiento,
         contraseña: bcrypt.hashSync(req.body.contraseña,10),
      };
      console.log(newUser);
      users.push(newUser);
      console.log('User creado');
      let usersJson = JSON.stringify(users);
      fs.writeFileSync(usersFilepath, usersJson);
      console.log('User cargado al jsonDataBase :)');
      res.redirect("/")

   },
   userProfile: (req, res) => {
      let userId = req.params.id;
      let user = users.find(user => user.id == userId);
      let pathViewDetail = path.join(__dirname, '../views/users/userProfile.ejs');
      res.render(pathViewDetail, {user})
   },
};

module.exports=controller;