module.exports = (sequelize, dataTypes) => {

    let alias = 'Stock';
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
        inventario: {
            type: dataTypes.INTEGER
        }

    };
    let config = {
        tableName: 'stock',
        timestamps: false
    };


    const Stock = sequelize.define(alias, cols, config)
    return Stock

}