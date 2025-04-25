/*
  Warnings:

  - You are about to drop the column `storyline` on the `movie` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `movie` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[movieDataId]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movieDataId` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `movie` DROP COLUMN `storyline`,
    DROP COLUMN `title`,
    ADD COLUMN `celebId` INTEGER NULL,
    ADD COLUMN `movieDataId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Celeb` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `imageURL` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `storyline` TEXT NOT NULL,
    `posterURL` VARCHAR(191) NOT NULL,
    `releaseDate` DATETIME(3) NOT NULL,
    `length` INTEGER NOT NULL,
    `countryOfOrigin` VARCHAR(191) NOT NULL,
    `productionCompany` VARCHAR(191) NOT NULL,
    `language` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_writers` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_writers_AB_unique`(`A`, `B`),
    INDEX `_writers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_cast` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_cast_AB_unique`(`A`, `B`),
    INDEX `_cast_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Movie_movieDataId_key` ON `Movie`(`movieDataId`);

-- AddForeignKey
ALTER TABLE `Movie` ADD CONSTRAINT `Movie_movieDataId_fkey` FOREIGN KEY (`movieDataId`) REFERENCES `MovieData`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Movie` ADD CONSTRAINT `Movie_celebId_fkey` FOREIGN KEY (`celebId`) REFERENCES `Celeb`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_writers` ADD CONSTRAINT `_writers_A_fkey` FOREIGN KEY (`A`) REFERENCES `Celeb`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_writers` ADD CONSTRAINT `_writers_B_fkey` FOREIGN KEY (`B`) REFERENCES `Movie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_cast` ADD CONSTRAINT `_cast_A_fkey` FOREIGN KEY (`A`) REFERENCES `Celeb`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_cast` ADD CONSTRAINT `_cast_B_fkey` FOREIGN KEY (`B`) REFERENCES `Movie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
