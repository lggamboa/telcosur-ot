/**
 * @file Contratista.js
 * @brief Modelo de la entidad Contratista.
 */

module.exports = (sequelize, DataTypes) => {
    const Contratista = sequelize.define('Contratista', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        zona: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        especialidad: {
            type: DataTypes.STRING(50)
        },
        activo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        tableName: 'contratistas',
        timestamps: false
    });

    return Contratista;
};
