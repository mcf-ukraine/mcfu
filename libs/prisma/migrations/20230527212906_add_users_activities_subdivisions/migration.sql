-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('MEMBER', 'SERVICE');

-- CreateEnum
CREATE TYPE "MembershipType" AS ENUM ('FULL', 'REDUCED');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "clerkId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountType" "AccountType" NOT NULL DEFAULT 'MEMBER',
    "middleName" TEXT,
    "phone" TEXT,
    "birthday" TIMESTAMP(3),
    "separatedSubdivisionId" INTEGER NOT NULL,
    "isMembershipActive" BOOLEAN NOT NULL DEFAULT false,
    "membershipType" "MembershipType" NOT NULL DEFAULT 'FULL',
    "isExcluded" BOOLEAN NOT NULL DEFAULT false,
    "excludedReason" TEXT,
    "fullName" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeparatedSubdivision" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "headName" TEXT NOT NULL,
    "contacts" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "acceptsOnlinePayments" BOOLEAN NOT NULL DEFAULT false,
    "feeAmount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "SeparatedSubdivision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ActivityType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityTypesUsers" (
    "id" SERIAL NOT NULL,
    "activityTypeId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ActivityTypesUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_separatedSubdivisionId_fkey" FOREIGN KEY ("separatedSubdivisionId") REFERENCES "SeparatedSubdivision"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityTypesUsers" ADD CONSTRAINT "ActivityTypesUsers_activityTypeId_fkey" FOREIGN KEY ("activityTypeId") REFERENCES "ActivityType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityTypesUsers" ADD CONSTRAINT "ActivityTypesUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;
