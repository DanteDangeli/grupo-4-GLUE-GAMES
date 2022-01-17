const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs")
const session = require('express-session')
const User = require('../User');
const {	validationResult } = require('express-validator');


const usersFilepath = path.join(__dirname, '../json/usersDatabase.json');
const users = JSON.parse(fs.readFileSync(usersFilepath, 'utf-8'));


const controller = {
   login: (req, res)=>{
      let pathLogin = path.join(__dirname, '../views/users/login.ejs')
      res.render(pathLogin) 
   },
   registro: (req, res)=>{
      let pathRegistro = path.join(__dirname, '../views/users/registro.ejs')
      res.render(pathRegistro)
   },

   createUser: (req,res) => {
      let pathRegister = path.join(__dirname, '../views/users/registro.ejs')
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render(pathRegister, {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render(pathRegister, {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
      }

         let userToCreate = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename
         }

         let userCreated = User.create(userToCreate);
   
         return res.redirect('/user/login');
		 

   },
	loginProcess: (req, res) => {
      let pathLogin = path.join(__dirname, '../views/users/login.ejs')
      let pathProfile = path.join(__dirname, '../views/users/userProfile.ejs')
		let userToLogin = User.findByField('email', req.body.email);
		let emptyEmail = req.body.email;
		let emptyPassword = req.body.password;
		var nada = []
		if(emptyPassword == nada){
			return res.render(pathLogin, {
				errors: {
					password: {
						msg: 'Debe poner una contraseña valida.'
					}
				}
			});
		} 
		if(emptyEmail == nada){
			return res.render(pathLogin, {
				errors: {
					email: {
						msg: 'Debe poner un email valido.'
					}
				}
			});
		} 

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
					password: {
						msg: 'Las credenciales son inválidas.'
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
