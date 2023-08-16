/*
  Warnings:

  - Added the required column `id` to the `TagsOnPosts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TagsOnPosts` ADD COLUMN `id` VARCHAR(191) NOT NULL;
