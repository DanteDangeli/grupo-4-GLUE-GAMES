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
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        direccion_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        telefono_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true
        }
    };
    let config = {
        tableName: 'usuarios',
        timestamps: false
    };

    const Usuario = sequelize.define(alias, cols, config)
    return Usuario
}