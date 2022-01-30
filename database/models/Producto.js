module.exports = (sequelize, dataTypes) => {

    let alias = 'Productos';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique:true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        precio:{
            type: dataTypes.STRING,
            allowNull: false
        },
        precio_lista:{
            type: dataTypes.STRING,
            allowNull: false
        },
        id_categoria: {
            type: dataTypes.INTEGER
        },
        id_departamento: {
            type: dataTypes.INTEGER
        },
        tipo_envio_id:{
            type: dataTypes.INTEGER
        },
        stock: {
            type: dataTypes.INTEGER
        },
        marca_id: {
            type: dataTypes.INTEGER
        },
        descripcion: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        departamento: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        categoria: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        marca: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING
        },
        descuento: {
            type: dataTypes.TEXT,
            allowNull: false
        },
    };

    let config = {
        tableName: 'productos',
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config)
    return Producto
 }