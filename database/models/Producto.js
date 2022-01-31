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
        },
        precio:{
            type: dataTypes.STRING,
        },
        precio_lista:{
            type: dataTypes.STRING,
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
        },
        departamento: {
            type: dataTypes.TEXT,
        },
        categoria: {
            type: dataTypes.TEXT,
        },
        marca: {
            type: dataTypes.TEXT,
        },
        image: {
            type: dataTypes.STRING
        },
        descuento: {
            type: dataTypes.TEXT,
        },
    };

    let config = {
        tableName: 'productos',
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config)
    return Producto
 }