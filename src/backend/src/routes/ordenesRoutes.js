/**
 * @file ordenesRoutes.js
 * @brief Rutas para la gestión de Órdenes de Trabajo.
 */

const express = require('express');
const router = express.Router();
const db = require('../models');

// GET /api/ordenes - Obtener todas las órdenes
router.get('/', async (req, res) => {
    try {
        const ordenes = await db.OrdenTrabajo.findAll({
            include: [db.Sitio, db.Contratista]
        });
        res.json(ordenes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /api/ordenes - Crear una nueva orden
router.post('/', async (req, res) => {
    try {
        const { sitio_id, sla_horas } = req.body;
        const nuevaOrden = await db.OrdenTrabajo.create({
            sitio_id,
            sla_horas,
            estado: 'CREADA'
        });
        res.status(201).json(nuevaOrden);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
