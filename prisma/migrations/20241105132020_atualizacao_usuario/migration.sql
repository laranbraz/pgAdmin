-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "nivelPermissao" TEXT NOT NULL DEFAULT 'user',
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;
