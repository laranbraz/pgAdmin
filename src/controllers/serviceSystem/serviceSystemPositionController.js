const prisma = require('../../config/prismaConnection');

const getAllSystemServicePosition = async (req, res) => {
    try {
      const sistemasServico = await prisma.SistemasServico.findMany({
        include: {
          sistema: {
            select: { sistema: true }
          },
          servico: {
            select: { servico: true }
          },
          cargo: {
            select: { cargo: true }
          }
        }
      });

      const result = sistemasServico.map(item => ({
        id: item.id,
        sistemaId: item.sistema ? item.sistema.sistema : null,
        servicoId: item.servico ? item.servico.servico : null,
        cargoId: item.cargo ? item.cargo.cargo : null
      }));

      res.status(200).json(result);
    } catch (err) {
      console.error('Erro ao buscar serviços, sistemas e cargos', err.stack);
      res.status(500).json({ error: 'Erro ao buscar serviços, sistemas e cargos' });
    }
  };

module.exports = {
    getAllSystemServicePosition
};