module.exports = (sequelize, dataTypes) => {

    let alias = 'Telefonos';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique:true
        },
        telefono: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        }
    };
    let config = {
        tableName: 'telefonos',
        timestamps: false
    };

    const Telefono = sequelize.define(alias, cols, config)
    return Telefono
}