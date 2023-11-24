const express = require('express');
const controllers = require('../../controllers/users/index')
const authMiddleware = require('../../middleware/auth');
 const uploadMiddleware = require('../../middleware/upload')
const router = express.Router();



// Ruta para el registro de usuarios
router.post('/signup', controllers.signup);

// Ruta para el inicio de sesión
router.post('/login', controllers.login);

// Ruta para el logout
router.get('/logout', authMiddleware, controllers.logout);

// Ruta para obtener el usuario actual
router.get('/current', authMiddleware, controllers.current);

// Ruta para agregar avatars
router.patch('/avatars', authMiddleware, uploadMiddleware.single('avatar'), controllers.updateAvatar);

module.exports = router;
