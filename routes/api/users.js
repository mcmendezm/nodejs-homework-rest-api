const express = require('express');
const controllers= require('../../controllers/users/index')
const router = express.Router();


// Ruta para el registro de usuarios
router.post('/signup', controllers.signup);

// Ruta para el inicio de sesión
router.post('/login', controllers.login);

module.exports = router;
