/*
  Warnings:

  - The primary key for the `CreatorEditor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `editorEmail` on the `CreatorEditor` table. All the data in the column will be lost.
  - The primary key for the `VideoEditor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `editorId` on the `VideoEditor` table. All the data in the column will be lost.
  - Added the required column `editorId` to the `CreatorEditor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `editorEmail` to the `VideoEditor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CreatorEditor" DROP CONSTRAINT "CreatorEditor_editorEmail_fkey";

-- DropForeignKey
ALTER TABLE "VideoEditor" DROP CONSTRAINT "VideoEditor_editorId_fkey";

-- AlterTable
ALTER TABLE "CreatorEditor" DROP CONSTRAINT "CreatorEditor_pkey",
DROP COLUMN "editorEmail",
ADD COLUMN     "editorId" TEXT NOT NULL,
ADD CONSTRAINT "CreatorEditor_pkey" PRIMARY KEY ("creatorId", "editorId");

-- AlterTable
ALTER TABLE "VideoEditor" DROP CONSTRAINT "VideoEditor_pkey",
DROP COLUMN "editorId",
ADD COLUMN     "editorEmail" TEXT NOT NULL,
ADD CONSTRAINT "VideoEditor_pkey" PRIMARY KEY ("videoId", "editorEmail");

-- AddForeignKey
ALTER TABLE "CreatorEditor" ADD CONSTRAINT "CreatorEditor_editorId_fkey" FOREIGN KEY ("editorId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoEditor" ADD CONSTRAINT "VideoEditor_editorEmail_fkey" FOREIGN KEY ("editorEmail") REFERENCES "user"("email") ON DELETE CASCADE ON UPDATE CASCADE;
