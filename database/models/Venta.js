module.exports = (sequelize, dataTypes) => {

    let alias = 'Ventas';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        id_cliente: {
            type: dataTypes.INTEGER
        },
        total: {
            type: dataTypes.INTEGER
        },
        fecha: {
            type: dataTypes.DATE
        }

    };
    let config = {
        tableName: 'ventas',
        timestamps: false
    };

    const Venta = sequelize.define(alias, cols, config)
    return Venta
}