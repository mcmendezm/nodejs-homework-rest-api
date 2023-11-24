const bcrypt = require('bcrypt');
const User = require('../../models/users');
const { signupSchema } = require('../../validation/validation');

const signup = async (req, res) => {
  try {
    // Validar los datos del registro
    const { error } = signupSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Verificar si el correo ya está en uso
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(409).json({ message: 'Email in use' });
    }

    // Hashear la contraseña con bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Crear un nuevo usuario con la contraseña cifrada
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
      
    });

    // Guardar el nuevo usuario en la base de datos
    await newUser.save();

    res.status(201).json({ user: { email: newUser.email, subscription: newUser.subscription } });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = signup;


