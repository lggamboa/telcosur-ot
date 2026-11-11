/**
 * @file authRoutes.js
 * @brief Rutas de autenticación.
 */

const express = require('express');
const router = express.Router();

// POST /api/auth/login - Autenticación de usuarios
router.post('/login', (req, res) => {
    res.json({ message: 'Endpoint de login (en construcción)' });
});

module.exports = router;
