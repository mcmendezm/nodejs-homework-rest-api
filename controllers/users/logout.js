const { Unauthorized } = require('http-errors');
const User = require('../../models/users');

const logout = async (req, res, next) => {
  try {
    console.log("HOLA")
    // Obtener el ID del usuario desde el token
    const userId = req.user.userId;
    console.log({userId})

    // Buscar el usuario por ID en la base de datos
    const user = await User.findById(userId);
    // Si el usuario no existe, devolver un error Unauthorized
    if (!user || !user.token) {
      console.log("LOGOUT 1")
      throw new Unauthorized('Not authorized');
    }

    // Eliminar el token en el usuario actual
    user.token = null;
    await user.save();

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};


module.exports = logout;
