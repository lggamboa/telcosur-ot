/**
 * @file OrdenTrabajo.js
 * @brief Modelo de la entidad Orden de Trabajo.
 */

module.exports = (sequelize, DataTypes) => {
    const OrdenTrabajo = sequelize.define('OrdenTrabajo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        estado: {
            type: DataTypes.ENUM('CREADA', 'ASIGNADA', 'EN_EJECUCION', 'CERRADA'),
            defaultValue: 'CREADA'
        },
        fecha_creacion: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        sla_horas: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'ordenes_trabajo',
        timestamps: false
    });

    return OrdenTrabajo;
};
