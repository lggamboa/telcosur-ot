/**
 * @file index.js
 * @brief Configuración de la conexión a la base de datos con Sequelize.
 */

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME || 'telcosur_ot',
    process.env.DB_USER || 'telcosur',
    process.env.DB_PASSWORD || 'telcosur_dev_2026',
    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        logging: false
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar modelos
db.Sitio = require('./Sitio')(sequelize, DataTypes);
db.OrdenTrabajo = require('./OrdenTrabajo')(sequelize, DataTypes);
db.Contratista = require('./Contratista')(sequelize, DataTypes);

// Definir relaciones
db.Sitio.hasMany(db.OrdenTrabajo, { foreignKey: 'sitio_id' });
db.OrdenTrabajo.belongsTo(db.Sitio, { foreignKey: 'sitio_id' });

db.Contratista.hasMany(db.OrdenTrabajo, { foreignKey: 'contratista_id' });
db.OrdenTrabajo.belongsTo(db.Contratista, { foreignKey: 'contratista_id' });

module.exports = db;
