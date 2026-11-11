/**
 * @file app.js
 * @brief Punto de entrada de la API REST del Sistema de OT TelcoSur.
 * @author Leonardo Gamboa
 * @date 2026
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Importar rutas (las crearemos luego)
const ordenesRoutes = require('./routes/ordenesRoutes');
const authRoutes = require('./routes/authRoutes');

// Rutas base
app.use('/api/ordenes', ordenesRoutes);
app.use('/api/auth', authRoutes);

// Endpoint de health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        service: 'telcosur-ot-backend',
        version: '0.1.0',
        timestamp: new Date().toISOString()
    });
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).json({ error: 'Recurso no encontrado', path: req.originalUrl });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`[TelcoSur OT] Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
