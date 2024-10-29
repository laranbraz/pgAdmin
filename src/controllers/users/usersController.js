const prisma = require('../../config/prismaConnection');

  // Obter todos os usuários
  const getAllUsers = async (req, res) => {
    try {
      const pessoas = await prisma.pessoa.findMany();
      res.status(200).json(pessoas);
    } catch (err) {
      console.error('Erro ao buscar requisitantes', err);
      res.status(500).json({ error: 'Erro ao buscar requisitantes' });
    }
  };
  
  // Excluir um usuário
  const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const pessoa = await prisma.pessoa.delete({
        where: {
          id: parseInt(id),
        },
      });
  
      res.status(200).json(pessoa);
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
    deleteUser
};