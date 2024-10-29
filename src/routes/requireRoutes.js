// Obter todos os requisicoes
const getAllRequires = async (req, res) => {
    try {
      const requisicoes = await prisma.requisicao.findMany();
      res.status(200).json(requisicoes);
    } catch (err) {
      console.error('Erro ao buscar requisicoes', err.stack);
      res.status(500).json({ error: 'Erro ao buscar requisicoes' });
    }
  };
  
  // Deletar uma requisição
  const deleteRequire = async (req, res) => {
    const { id } = req.params;
  
    try {
      const requisicao = await prisma.requisicao.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(requisicao);
    } catch (err) {
      if (err.code === 'P2025') {
        res.status(404).json({ error: 'Requisição não encontrada' });
      } else {
        console.error('Erro ao excluir requisição', err);
        res.status(500).json({ error: 'Erro ao excluir requisição' });
      }
    }
  };
  
  module.exports = {
    getAllRequires,
    deleteRequire
  };