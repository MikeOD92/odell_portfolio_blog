/*
  Warnings:

  - The primary key for the `TagsOnPosts` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `TagsOnPosts` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`postId`, `tagId`, `tagName`);
