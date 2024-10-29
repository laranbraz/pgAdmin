const prisma = require('../../config/prismaConnection');

// Criação de Cargos
const addUser = async (req, res) => {
  const { username, passwordHash } = req.body;

  try {
    const novoUsuario = await prisma.usuario.create({
      data: { username, passwordHash },
    });
    res.status(201).json({ message: 'Usuário adicionado com sucesso', usuario: novoUsuario });
  } catch (err) {
    console.error('Erro ao adicionar usuário', err);
    res.status(500).json({ error: 'Erro ao adicionar usuário', details: err.message });
  }
};

  // Obter todos os usuários
  const getAllUsers = async (req, res) => {
    try {
      const pessoas = await prisma.usuario.findMany();
      res.status(200).json(usuarios);
    } catch (err) {
      console.error('Erro ao buscar requisitantes', err);
      res.status(500).json({ error: 'Erro ao buscar requisitantes' });
    }
  };
  
  // Excluir um usuário
  const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const pessoa = await prisma.usuario.delete({
        where: {
          id: parseInt(id),
        },
      });
  
      res.status(200).json(usuarios);
    } catch (err) {
      if (err.code === 'P2025') {
        res.status(404).json({ error: 'Requisitante não encontrado' });
      } else {
        console.error('Erro ao excluir requisitante', err);
        res.status(500).json({ error: 'Erro ao excluir requisitante' });
      }
    }
  };

module.exports = {
    getAllUsers,
    deleteUser,
    addUser
};