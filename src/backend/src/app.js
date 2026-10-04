/**
 * @file app.js
 * @brief Punto de entrada de la API REST.
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

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

/**
 * @brief Health check del servidor.
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'telcosur-ot-backend',
    version: '0.1.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/api', (req, res) => {
  res.json({
    name: 'Sistema de Ordenes de Trabajo - TelcoSur',
    version: '0.1.0'
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Recurso no encontrado', path: req.originalUrl });
});

app.listen(PORT, () => {
  console.log('[TelcoSur OT] Servidor en http://localhost:' + PORT);
});

module.exports = app;
