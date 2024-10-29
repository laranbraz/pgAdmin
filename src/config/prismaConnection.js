const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkConnection() {
  try {
    const now = await prisma.$queryRaw`SELECT NOW()`;
    console.log('Conectado ao banco de dados', now);
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkConnection();

module.exports = prisma;