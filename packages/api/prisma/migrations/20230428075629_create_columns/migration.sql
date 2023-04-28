/*
  Warnings:

  - Added the required column `location` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "addresses" ADD COLUMN     "complement" TEXT,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "neighborhood" TEXT,
ADD COLUMN     "street" TEXT,
ADD COLUMN     "uf" VARCHAR(2) NOT NULL,
ADD COLUMN     "zip" VARCHAR(9) NOT NULL;
