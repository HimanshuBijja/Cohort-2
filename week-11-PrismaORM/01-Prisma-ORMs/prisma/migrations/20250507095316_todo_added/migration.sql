/*
  Warnings:

  - You are about to drop the `demo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "demo";

-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "todo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);
