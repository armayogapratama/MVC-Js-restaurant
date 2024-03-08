const fs = require("fs");
const pool = require("./connection");

const categories = JSON.parse(
  fs.readFileSync("./data/categories.json", "utf-8")
)
  .map((customer) => {
    const { name } = customer;
    return `('${name}')`;
  })
  .join(",\n");

const menus = JSON.parse(fs.readFileSync("./data/menus.json", "utf-8"))
  .map((menu) => {
    const { name, CategoryId, stock, price, createdAt } = menu;
    return `('${name}', ${CategoryId}, ${stock}, ${price}, '${createdAt}')`;
  })
  .join(",\n");

const queryInsertCategories = `
    insert into "Categories" ("name")
    values ${categories}
    Returning *
`;

const queryInsertMenus = `
    insert into "Menus" ("name", "CategoryId", "stock", "price", "createdAt")
    values ${menus}
    Returning *
`;

(async () => {
  try {
    await pool.query(queryInsertCategories);
    await pool.query(queryInsertMenus);
    console.log(`Items has been inserted`);
  } catch (err) {
    console.log(err);
  }
})();
