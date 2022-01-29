module.exports = (sequelize, dataTypes) => {

    let alias = 'Usuarios';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING,
            allowNull: false
        },
        nombre_usuario: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        fecha_nacimiento: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        foto_usuario: {
            type: dataTypes.STRING,
        },
        direccion_id: {
            type: dataTypes.INTEGER,
            unique: true
        },
        telefono_id: {
            type: dataTypes.INTEGER,
            unique: true
        },
        pasword: {
            type: dataTypes.STRING,
            allowNull: false
        },
    };
    let config = {
        tableName: 'usuarios',
        timestamps: false
    };

    const Usuario = sequelize.define(alias, cols, config)
    return Usuario
}