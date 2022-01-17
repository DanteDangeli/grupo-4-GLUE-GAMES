const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('nombre')
		.notEmpty().withMessage('Tienes que escribir un nombre.')
		.isLength({ min : 2}).withMessage("El nombre debe tener más de 2 caracteres."),
    body('apellido')
		.notEmpty().withMessage('Tienes que escribir un apellido.'),
    body('usuario').notEmpty().withMessage('Tienes que escribir un usuario.'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico.').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido.'),
	body('password')
		.notEmpty().withMessage('Tienes que escribir una contraseña.')
		.isLength({ min : 8}).withMessage("La contraseña tener más de 8 caracteres."),
	body('fechaNacimiento').notEmpty().withMessage('Tienes que escribir tu fecha de nacimiento.'),
	body('fotoPerfil').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif', 'jpeg'];

		if (!file) {
			throw new Error('Tienes que subir una imagen.');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}.`);
			}
		}

		return true;
	})
]