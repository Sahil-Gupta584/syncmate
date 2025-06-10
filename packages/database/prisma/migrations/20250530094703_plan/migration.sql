/*
  Warnings:

  - Made the column `plan` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "plan" SET NOT NULL,
ALTER COLUMN "plan" SET DEFAULT 'TRIAL';
