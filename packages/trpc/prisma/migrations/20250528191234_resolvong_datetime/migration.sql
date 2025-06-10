/*
  Warnings:

  - The `trialEndAt` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `createdAt` on the `user` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updatedAt` on the `user` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "trialEndAt",
ADD COLUMN     "trialEndAt" JSONB,
DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" JSONB NOT NULL,
DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" JSONB NOT NULL;
