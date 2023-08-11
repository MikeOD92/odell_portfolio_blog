/*
  Warnings:

  - A unique constraint covering the columns `[id,tag]` on the table `tag` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tagName` to the `TagsOnPosts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `TagsOnPosts` DROP FOREIGN KEY `TagsOnPosts_tagId_fkey`;

-- AlterTable
ALTER TABLE `TagsOnPosts` ADD COLUMN `tagName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `tag_id_tag_key` ON `tag`(`id`, `tag`);

-- AddForeignKey
ALTER TABLE `TagsOnPosts` ADD CONSTRAINT `TagsOnPosts_tagId_tagName_fkey` FOREIGN KEY (`tagId`, `tagName`) REFERENCES `tag`(`id`, `tag`) ON DELETE RESTRICT ON UPDATE CASCADE;
