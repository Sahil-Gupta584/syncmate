/*
  Warnings:

  - The primary key for the `CreatorEditor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `editorId` on the `CreatorEditor` table. All the data in the column will be lost.
  - Added the required column `editorEmail` to the `CreatorEditor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CreatorEditor" DROP CONSTRAINT "CreatorEditor_editorId_fkey";

-- AlterTable
ALTER TABLE "CreatorEditor" DROP CONSTRAINT "CreatorEditor_pkey",
DROP COLUMN "editorId",
ADD COLUMN     "editorEmail" TEXT NOT NULL,
ADD CONSTRAINT "CreatorEditor_pkey" PRIMARY KEY ("creatorId", "editorEmail");

-- AddForeignKey
ALTER TABLE "CreatorEditor" ADD CONSTRAINT "CreatorEditor_editorEmail_fkey" FOREIGN KEY ("editorEmail") REFERENCES "user"("email") ON DELETE CASCADE ON UPDATE CASCADE;
