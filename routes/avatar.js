const express = require('express');
const controllers = require('../controllers/users/index')
const authMiddleware = require('../middleware/auth');
const uploadMiddleware = require('../middleware/upload')
const router = express.Router();


// Ruta para agregar avatars
router.patch('/', authMiddleware, uploadMiddleware.single('avatar'), controllers.updateAvatar);

module.exports = router;