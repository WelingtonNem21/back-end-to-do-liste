-- CreateTable
CREATE TABLE "Lista" (
    "id" SERIAL NOT NULL,
    "tarefa" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lista_pkey" PRIMARY KEY ("id")
);
