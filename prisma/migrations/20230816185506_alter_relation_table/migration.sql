/*
  Warnings:

  - The primary key for the `TagsOnPosts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tagName` on the `TagsOnPosts` table. All the data in the column will be lost.
  - Added the required column `id` to the `TagsOnPosts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `TagsOnPosts` DROP FOREIGN KEY `TagsOnPosts_tagId_tagName_fkey`;

-- AlterTable
ALTER TABLE `TagsOnPosts` DROP PRIMARY KEY,
    DROP COLUMN `tagName`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `TagsOnPosts` ADD CONSTRAINT `TagsOnPosts_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
