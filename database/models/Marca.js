module.exports = (sequelize, dataTypes) => {

    let alias = 'Marcas';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        marca: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tablename: 'marcas',
        timestamps: false
    };




    const Marca = sequelize.define(alias, cols, config)
    return Marca
}