module.exports = (sequelize, dataTypes) => {

    let alias = "Categorias";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        categoria:{
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        tableName: "categorias",
        timestamps: false
    };
    
    const Categoria = sequelize.define(alias, cols, config)
    return Categoria
}