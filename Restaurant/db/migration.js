const pool = require("./connection");

const categoriesDDL = `
CREATE TABLE IF NOT EXISTS "Categories" (
    "id" SERIAL primary key,
    "name" VARCHAR(50) NOT NULL
    )
`;

const menusDDL = `
CREATE table IF NOT EXISTS "Menus" (
    "id" SERIAL primary key not null,
    "name" VARCHAR,
    "stock" INTEGER,
    "price" INTEGER,
    "createdAt" DATE,
    "CategoryId" INTEGER not null REFERENCES "Categories"("id")
    )
`;

(async () => {
  try {
    await pool.query(`DROP TABLE IF EXISTS "Menus", "Categories"`);
    await pool.query(categoriesDDL);
    await pool.query(menusDDL);
    console.log(`Table has been created`);
  } catch (err) {
    console.log(err, `CategoriesDDL`);
  }
})();
