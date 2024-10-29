-- CreateTable
CREATE TABLE "Unidade" (
    "id" SERIAL NOT NULL,
    "unidade" VARCHAR(100) NOT NULL,

    CONSTRAINT "Unidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cargo" (
    "id" SERIAL NOT NULL,
    "cargo" VARCHAR(40),

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sistema" (
    "id" SERIAL NOT NULL,
    "sistema" VARCHAR(50) NOT NULL,

    CONSTRAINT "Sistema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servico" (
    "id" SERIAL NOT NULL,
    "servico" VARCHAR(50) NOT NULL,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoArquivo" (
    "id" SERIAL NOT NULL,
    "arquivo" TEXT NOT NULL,

    CONSTRAINT "TipoArquivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SistemasServico" (
    "id" SERIAL NOT NULL,
    "sistemaID" INTEGER,
    "servicoID" INTEGER,

    CONSTRAINT "SistemasServico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SistemasServicosArquivo" (
    "id" SERIAL NOT NULL,
    "sistemas_servicosID" INTEGER,
    "arquivoID" INTEGER,

    CONSTRAINT "SistemasServicosArquivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anexo" (
    "id" SERIAL NOT NULL,
    "anexo" TEXT NOT NULL,
    "filename" VARCHAR(500) NOT NULL,
    "mimetype" VARCHAR(500),
    "size" INTEGER,

    CONSTRAINT "Anexo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requisicoes" (
    "id" SERIAL NOT NULL,
    "cpf" VARCHAR(14) NOT NULL,
    "nomeCompleto" VARCHAR(200) NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "matricula" VARCHAR(8) NOT NULL,
    "emailPessoal" VARCHAR(150),
    "emailFuncional" VARCHAR(150) NOT NULL,
    "contato" VARCHAR(17),
    "observacao" VARCHAR(100),
    "unidadeId" INTEGER,
    "cargoId" INTEGER,
    "sistema_servicoID" INTEGER NOT NULL,
    "anexoID" INTEGER,
    "chamadoID" INTEGER,
    "data_solicitacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "requisicoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SistemasServico" ADD CONSTRAINT "SistemasServico_sistemaID_fkey" FOREIGN KEY ("sistemaID") REFERENCES "Sistema"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SistemasServico" ADD CONSTRAINT "SistemasServico_servicoID_fkey" FOREIGN KEY ("servicoID") REFERENCES "Servico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SistemasServicosArquivo" ADD CONSTRAINT "SistemasServicosArquivo_sistemas_servicosID_fkey" FOREIGN KEY ("sistemas_servicosID") REFERENCES "SistemasServico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SistemasServicosArquivo" ADD CONSTRAINT "SistemasServicosArquivo_arquivoID_fkey" FOREIGN KEY ("arquivoID") REFERENCES "TipoArquivo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requisicoes" ADD CONSTRAINT "requisicoes_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "Unidade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requisicoes" ADD CONSTRAINT "requisicoes_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requisicoes" ADD CONSTRAINT "requisicoes_sistema_servicoID_fkey" FOREIGN KEY ("sistema_servicoID") REFERENCES "SistemasServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requisicoes" ADD CONSTRAINT "requisicoes_anexoID_fkey" FOREIGN KEY ("anexoID") REFERENCES "Anexo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
