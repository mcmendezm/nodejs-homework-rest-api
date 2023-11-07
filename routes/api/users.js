const express = require('express');
const signup = require('../../controllers/signup')
const login = require('../../controllers/login');
const router = express.Router();


// Ruta para el registro de usuarios
router.post('/signup', signup);

// Ruta para el inicio de sesión
router.post('/login', login);

module.exports = router;
