const express = require('express');
const contactRoutes = require('./contacts');
const userRoutes = require('./users');
const router = express.Router();
const avatarRouter = require('../avatar'); 

// Rutas para contactos
router.use('/contacts', contactRoutes);

// Rutas para usuarios
router.use('/users', userRoutes);

// Ruta para avatars
router.use('/users/avatars', avatarRouter); 

module.exports = router;
