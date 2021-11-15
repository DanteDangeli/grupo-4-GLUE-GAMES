const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs")
const session = require('express-session')
const User = require('../models/User');

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
         fotoPerfil: req.file.filename,
         password: bcrypt.hashSync(req.body.contraseña,10),
      };
      console.log(newUser);
      users.push(newUser);
      console.log('User creado');
      let usersJson = JSON.stringify(users);
      fs.writeFileSync(usersFilepath, usersJson);
      console.log('User cargado al jsonDataBase :)');
      res.redirect("/")

   },
	loginProcess: (req, res) => {
      let pathLogin = path.join(__dirname, '../views/users/login.ejs')
      let pathProfile = path.join(__dirname, '../views/users/userProfile.ejs')
		let userToLogin = User.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.mantener) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('/user/profile');
			} 
			return res.render(pathLogin, {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render(pathLogin, {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	},
   
   profile: (req, res) => {
      let pathProfile = path.join(__dirname, '../views/users/userProfile.ejs')      
		return res.render(pathProfile, {
			user: req.session.userLogged
		});
   },

};

module.exports=controller;

/* processLogin: (req, res) => {
   let usersJson = fs.readFileSync(usersFilepath, 'utf-8');
   let users;
   if (usersJson == ''){
      users = [];
   } else {
      users = JSON.parse(usersJson);
   }
   for ( let i = 0; i < users.length; i++) {
      if (users[i].email == req.body.email) {
         if (bcrypt.compareSync(req.body.password, users[i].password)) {
            let usuarioALogearse = users[i];
            break;
         }
      }
   }
   if (usuarioALogearse == undefined) {
      return res.render ( 'login', {errors: [ 
         { msg: 'Credenciales invalidas'}
      ]})         
   }

req.session.usuarioLogeado = usuarioALogearse;
res.render('te logeaste');
} */
