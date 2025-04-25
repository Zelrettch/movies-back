/*
  Warnings:

  - Added the required column `biography` to the `Celeb` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `celeb` ADD COLUMN `biography` TEXT NOT NULL;
