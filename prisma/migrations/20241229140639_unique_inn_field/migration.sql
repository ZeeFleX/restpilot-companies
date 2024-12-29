/*
  Warnings:

  - A unique constraint covering the columns `[inn]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Company_inn_key` ON `Company`(`inn`);
