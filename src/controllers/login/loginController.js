const prisma = require('../../config/prismaConnection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const loginUsuario = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const usuario = await prisma.usuario.findUnique({
        where: { username },
      });
  
      if (!usuario) {
        return res.status(400).json({ error: 'Usuário ou senha incorretos' });
      }
  
      const passwordValid = await bcrypt.compare(password, usuario.passwordHash);
  
      if (!passwordValid) {
        return res.status(400).json({ error: 'Usuário ou senha incorretos' });
      }
  
      const token = jwt.sign({ userId: usuario.id }, JWT_SECRET, {
        expiresIn: '1h',
      });
  
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  };

  module.exports = { loginUsuario };