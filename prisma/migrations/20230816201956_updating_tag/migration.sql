/*
  Warnings:

  - You are about to drop the `_PostToTag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `parentId` to the `tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_PostToTag` DROP FOREIGN KEY `_PostToTag_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PostToTag` DROP FOREIGN KEY `_PostToTag_B_fkey`;

-- AlterTable
ALTER TABLE `tag` ADD COLUMN `parentId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_PostToTag`;

-- AddForeignKey
ALTER TABLE `tag` ADD CONSTRAINT `tag_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
