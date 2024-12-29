/*
  Warnings:

  - You are about to drop the column `name` on the `Company` table. All the data in the column will be lost.
  - Added the required column `companyName` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inn` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Made the column `address` on table `Company` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Company` DROP COLUMN `name`,
    ADD COLUMN `companyName` VARCHAR(191) NOT NULL,
    ADD COLUMN `inn` VARCHAR(191) NOT NULL,
    MODIFY `address` VARCHAR(191) NOT NULL;
