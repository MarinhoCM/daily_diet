-- CreateTable
CREATE TABLE "Diet" (
    "id_diet" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "objective" TEXT NOT NULL,
    "userId_user" INTEGER,
    CONSTRAINT "Diet_userId_user_fkey" FOREIGN KEY ("userId_user") REFERENCES "User" ("id_user") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Snack" (
    "id_snack" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "datetime" DATETIME NOT NULL,
    "from_diet" BOOLEAN NOT NULL,
    "userId_user" INTEGER
);

-- CreateTable
CREATE TABLE "DietSnack" (
    "dietId" INTEGER NOT NULL,
    "snackId" INTEGER NOT NULL,

    PRIMARY KEY ("dietId", "snackId"),
    CONSTRAINT "DietSnack_dietId_fkey" FOREIGN KEY ("dietId") REFERENCES "Diet" ("id_diet") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DietSnack_snackId_fkey" FOREIGN KEY ("snackId") REFERENCES "Snack" ("id_snack") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id_user" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
