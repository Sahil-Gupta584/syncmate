/*
  Warnings:

  - The values [PENDING,UPLOADING] on the enum `VideoStatus` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `duration` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "VideoStatus_new" AS ENUM ('DRAFT', 'SCHEDULED', 'PROCESSING');
ALTER TABLE "Video" ALTER COLUMN "videoStatus" DROP DEFAULT;
ALTER TABLE "Video" ALTER COLUMN "videoStatus" TYPE "VideoStatus_new" USING ("videoStatus"::text::"VideoStatus_new");
ALTER TYPE "VideoStatus" RENAME TO "VideoStatus_old";
ALTER TYPE "VideoStatus_new" RENAME TO "VideoStatus";
DROP TYPE "VideoStatus_old";
ALTER TABLE "Video" ALTER COLUMN "videoStatus" SET DEFAULT 'DRAFT';
COMMIT;

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "duration" INTEGER NOT NULL;
