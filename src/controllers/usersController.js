const path = require('path');
const bcrypt = require("bcryptjs")
const session = require('express-session')
const {	validationResult } = require('express-validator');
const db = require('../../database/models');
const fs = require('fs');





const controller = {
   login: (req, res)=>{
	console.log(req.session.userLogeed, 'usuario logueado')
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
		let userInDB = db.Usuarios.findAll({
			where:{
				email:req.body.email
			}
		});
	
		if (userInDB == req.body.email) {
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
            nombre: req.body.nombre,
			apellido: req.body.apellido,
			nombre_usuario: req.body.usuario,
			email: req.body.email,
			fecha_nacimiento: req.body.fechaNacimiento,
			foto_usuario: req.file.filename,
            pasword: bcrypt.hashSync(req.body.password, 10),  
         }

         db.Usuarios.create(userToCreate);
   
         return res.redirect('/user/login');
		 

   },
	loginProcess: (req, res) => {
		let pathLogin = path.join(__dirname, '../views/users/login.ejs')
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
		
	
	
		db.Usuarios.findOne({
			where:{
				email: req.body.email
			}
		}).then((userToLogin)=>{
			if(userToLogin){
				let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.pasword);
				if(isOkThePassword){
					delete userToLogin.pasword;
					req.session.userLogged = userToLogin;
					if(req.body.mantener){
						res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60)* 60})
					}
					
					return res.redirect('/user/profile')
					
				}
				return res.render(pathLogin, {
					errors:{
						email:{
							msg: 'las credenciales son invalidas'
						}
					}
				})
			}
			return res.render(pathLogin, {
				errors:{
					email:{
						msg: 'email no encontrado'
					}
				}
			})
			
			
			
			})
			
	
},
profile: (req, res) => {
	console.log(req.cookies.userEmail, 'soy una cookie desde profile')
	
   let pathProfile = path.join(__dirname, '../views/users/userProfile.ejs')      
	 return res.render(pathProfile, {
		 user: req.session.userLogged
	 })
	 
},
editarForm:(req, res)=>{
	let editarId = req.params.id;
	db.Usuarios.findOne({
		where:{
			id:editarId
		}
	})
	.then((usuario)=>{
		res.render(path.join(__dirname, '../views/users/editarProfile.ejs'),{usuario})
	})
   
},
editar:(req, res)=>{

	db.Usuarios.update({
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		nombre_usuario: req.body.usuario,
		email: req.body.email,
		fecha_nacimiento: req.body.fechaNacimiento
		
	},{
		where:{
			id: req.params.id
		}
	}).then(()=>{
		res.redirect('/user/logout')
	})
},
	logout: (req, res) => {
		console.log(
			'estoy en el logout')
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
   

};

module.exports=controller;
