module.exports = (sequelize, dataTypes) => {

let alias = "Carrito";
let cols = {
    id:{
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    id_cliente:{
        type: dataTypes.INTEGER
    },
    id_producto:{
        type: dataTypes.INTEGER
    }
};
let config = {
    tableName: "carrito_de_compras",
    timestamps: false
};

    const Carrito = sequelize.define(alias, cols, config)
    return Carrito
}