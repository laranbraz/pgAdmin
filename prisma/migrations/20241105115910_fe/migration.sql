-- AlterTable
ALTER TABLE "SistemasServico" ADD COLUMN     "cargoID" INTEGER;

-- AddForeignKey
ALTER TABLE "SistemasServico" ADD CONSTRAINT "SistemasServico_cargoID_fkey" FOREIGN KEY ("cargoID") REFERENCES "Cargo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
