const express = require('express');
const controllers= require('../../controllers/contacts/index')
const router = express.Router();
const authMiddleware = require('../../middleware/auth');

// Obtener la lista de contactos
router.get('/', authMiddleware , controllers.listContacts);

// Obtener un contacto por su ID
router.get('/:contactId', controllers.getContactById);

// Agregar un nuevo contacto
router.post('/', controllers.addContact);

// Eliminar un contacto por su ID
router.delete('/:contactId', controllers.removeContact);

// Actualizar un contacto por su ID
router.put('/:contactId', controllers.updateContact);

// Ruta para actualizar el estado favorito de un contacto
router.patch('/:contactId/favorite', controllers.updateFavoriteStatus);

module.exports = router;
