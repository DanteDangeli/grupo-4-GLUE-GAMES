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
        id_categoria: {
            type: dataTypes.INTEGER
        },
        id_departamento: {
            type: dataTypes.INTEGER
        },
        tipo_envio_id:{
            type: dataTypes.INTEGER
        },
        stock_id: {
            type: dataTypes.INTEGER
        },
        marca_id: {
            type: dataTypes.INTEGER
        },
        caracteristicas_principales: {
            type: dataTypes.TEXT
        },
        descripcion: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        categorias_id: {
            type: dataTypes.INTEGER
        },
        departamento_id: {
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: 'productos',
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config)
    return Producto
}