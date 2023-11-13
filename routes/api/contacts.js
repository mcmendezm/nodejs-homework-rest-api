const express = require('express');
const controllers= require('../../controllers/contacts/index')
const router = express.Router();
const authMiddleware = require('../../middleware/auth');

// Obtener la lista de contactos
router.get('/' ,authMiddleware , controllers.listContacts);

// Obtener un contacto por su ID
router.get('/:contactId' ,authMiddleware , controllers.getContactById);

// Agregar un nuevo contacto
router.post('/',authMiddleware , controllers.addContact);

// Eliminar un contacto por su ID
router.delete('/:contactId', authMiddleware ,controllers.removeContact);

// Actualizar un contacto por su ID
router.put('/:contactId', authMiddleware ,controllers.updateContact);

// Ruta para actualizar el estado favorito de un contacto
router.patch('/:contactId/favorite',authMiddleware , controllers.updateFavoriteStatus);

module.exports = router;
