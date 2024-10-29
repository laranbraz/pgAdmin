const prisma = require('../../config/prismaConnection');

const recuperarArquivo = async (req, res) => {
    const { id } = req.params;

    try {
        const anexo = await prisma.anexo.findUnique({
            where: { id: Number(id) },
            select: { anexo: true, filename: true, mimetype: true }
        });

        if (anexo) {
            const { anexo: anexoBase64, filename, mimetype } = anexo;

            const arquivoBuffer = Buffer.from(anexoBase64, 'base64');

            res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
            res.setHeader('Content-Type', mimetype);

            res.send(arquivoBuffer);
        } else {
            res.status(404).json({ error: 'Arquivo não encontrado' });
        }
    } catch (err) {
        console.error('Erro ao recuperar arquivo', err);
        res.status(500).json({ error: 'Erro ao recuperar arquivo', details: err.message });
    }
};

module.exports = {
    recuperarArquivo
}