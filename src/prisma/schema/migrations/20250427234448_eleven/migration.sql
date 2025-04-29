/*
  Warnings:

  - You are about to drop the column `celebId` on the `movie` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `movie` DROP FOREIGN KEY `Movie_celebId_fkey`;

-- DropIndex
DROP INDEX `Movie_celebId_fkey` ON `movie`;

-- AlterTable
ALTER TABLE `movie` DROP COLUMN `celebId`,
    ADD COLUMN `directorId` INTEGER NULL;

-- AlterTable
ALTER TABLE `moviedata` MODIFY `length` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Movie` ADD CONSTRAINT `Movie_directorId_fkey` FOREIGN KEY (`directorId`) REFERENCES `Celeb`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
