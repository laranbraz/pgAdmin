const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { JWT_SECRET } = process.env;

const prisma = new PrismaClient(); // Instância do Prisma Client

async function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const usuario = await prisma.usuario.findUnique({
      where: { id: decoded.userId },
    });

    if (!usuario) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    req.usuario = usuario;

    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
}

module.exports = authMiddleware;

