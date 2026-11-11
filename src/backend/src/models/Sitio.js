/**
 * @file Sitio.js
 * @brief Modelo de la entidad Sitio (Radiobase).
 */

module.exports = (sequelize, DataTypes) => {
    const Sitio = sequelize.define('Sitio', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        ubicacion: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        criticidad: {
            type: DataTypes.ENUM('ALTA', 'MEDIA', 'BAJA'),
            allowNull: false
        },
        activo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        tableName: 'sitios',
        timestamps: false
    });

    return Sitio;
};
