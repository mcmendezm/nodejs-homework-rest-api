const express = require('express');
const contactRoutes = require('./contacts');
const userRoutes = require('./users');
const router = express.Router();

// Rutas para contactos
router.use('/contacts', contactRoutes);

// Rutas para usuarios
router.use('/users', userRoutes);

module.exports = router;
