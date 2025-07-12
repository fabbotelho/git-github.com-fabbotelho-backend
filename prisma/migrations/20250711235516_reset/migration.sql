/*
  Warnings:

  - Made the column `estoque` on table `produtos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `produtos` MODIFY `estoque` INTEGER NOT NULL;
