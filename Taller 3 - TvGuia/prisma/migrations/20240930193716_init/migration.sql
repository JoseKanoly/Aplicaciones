-- CreateTable
CREATE TABLE "Canal" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Canal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Programa" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Programa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guia" (
    "id" SERIAL NOT NULL,
    "canalId" INTEGER NOT NULL,
    "programaId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "horaTransmision" TIMESTAMP(3) NOT NULL,
    "escalaRating" INTEGER NOT NULL,

    CONSTRAINT "Guia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Guia" ADD CONSTRAINT "Guia_canalId_fkey" FOREIGN KEY ("canalId") REFERENCES "Canal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guia" ADD CONSTRAINT "Guia_programaId_fkey" FOREIGN KEY ("programaId") REFERENCES "Programa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
