/*
  Warnings:

  - The `createdAt` column on the `verification` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updatedAt` column on the `verification` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `expiresAt` on the `verification` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "verification" DROP COLUMN "expiresAt",
ADD COLUMN     "expiresAt" JSONB NOT NULL,
DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" JSONB,
DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" JSONB;
