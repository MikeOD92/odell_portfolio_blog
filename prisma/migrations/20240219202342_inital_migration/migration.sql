-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "des" TEXT,
    "body" TEXT,
    "body1" TEXT,
    "body2" TEXT,
    "body3" TEXT,
    "body4" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "des" TEXT,
    "body" TEXT,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projectImg" (
    "id" SERIAL NOT NULL,
    "parentId" INTEGER NOT NULL,
    "location" VARCHAR(150) NOT NULL,
    "alt" VARCHAR(150) NOT NULL DEFAULT '',

    CONSTRAINT "projectImg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postImg" (
    "id" SERIAL NOT NULL,
    "parentId" INTEGER NOT NULL,
    "location" VARCHAR(150) NOT NULL,
    "alt" VARCHAR(150) NOT NULL DEFAULT '',
    "position" TEXT DEFAULT 'center',

    CONSTRAINT "postImg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "tag" VARCHAR(150) NOT NULL,
    "parentId" INTEGER NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tag_id_key" ON "tag"("id");

-- AddForeignKey
ALTER TABLE "projectImg" ADD CONSTRAINT "projectImg_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postImg" ADD CONSTRAINT "postImg_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
