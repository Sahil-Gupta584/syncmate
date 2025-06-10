/*
  Warnings:

  - Changed the type of `expiresAt` on the `session` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `createdAt` on the `session` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updatedAt` on the `session` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "session" DROP COLUMN "expiresAt",
ADD COLUMN     "expiresAt" JSONB NOT NULL,
DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" JSONB NOT NULL,
DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" JSONB NOT NULL;
