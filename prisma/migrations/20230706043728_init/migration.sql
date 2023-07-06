-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "headline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "category" TEXT NOT NULL
);
