module.exports = (sequelize, dataTypes) => {
    let alias = 'Favoritos';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        id_producto: {
            type: dataTypes.INTEGER
        },
        id_cliente: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'favoritos',
        timestamps: false
    };

    const Favorito = sequelize.define(alias, cols, config)
    return Favorito
}