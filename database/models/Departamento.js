module.exports = (sequelize, dataTypes) => {
    let alias = 'Departamentos';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        departamento: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        }
    };
    let config = {
        tableName: 'departamentos',
        timestamps: false
    };

    const Departamento = sequelize.define(alias, cols, config)
    return Departamento
}