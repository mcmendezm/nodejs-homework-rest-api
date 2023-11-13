const { Unauthorized } = require('http-errors');
const { userSchema } = require('../../models/users');

const current = async (req, res, next) => {
  try {
    // El middleware de autenticación ya ha verificado el token y ha establecido req.user
    const userId = req.user.id;

    // Busca el usuario por ID
    const user = await userSchema.findById(userId);

    if (!user || !user.token) {
      throw new Unauthorized('Not authorized');
    }

    // Respuesta exitosa
    res.status(200).json({
      email: user.email,
      subscription: user.subscription,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = current;
