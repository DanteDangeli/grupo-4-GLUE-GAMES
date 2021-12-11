module.exports = (sequelize, dataTypes) => {

    let alias = 'Direcciones';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true 
        },
        id_usuario: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        calle: {
            type: dataTypes.STRING
        },
        colonia: {
            type: dataTypes.STRING
        },
        ciudad: {
            type: dataTypes.STRING
        },
        pais: {
            type: dataTypes.STRING
        },
        codigo_postal: {
            type: dataTypes.INTEGER
        }

    };
    let config = {
        tableName: 'direcciones',
        timestamps: false
    }

    const Direccion = sequelize.define(alias, cols, config)
    return Direccion
}