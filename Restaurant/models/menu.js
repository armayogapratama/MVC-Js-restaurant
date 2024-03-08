const pool = require("../db/connection");
const Controller = require("../controllers/index");

class Menu {
  constructor(id, name, price, stock, CategoryId, createdAt) {
    this.id = id;
    this.name = name;
    this.price = +price;
    this.stock = +stock;
    this.category = CategoryId;
    this.createdAt = createdAt;
  }

  static async showMenuDrink() {
    const query = `
    select m.*, c."name" as "category" from "Menus" m
    join "Categories" c on c."id" = m."CategoryId"
    where c."name" = 'Drink' and "createdAt" between '2021-05-01' and '2021-06-30'`;

    const { rows } = await pool.query(query);
    return rows.map((el) => {
      const { id, name, price, stock, category, createdAt, CategoryId } = el;
      return new Menu(id, name, price, stock, category, createdAt, CategoryId);
    });
  }

  static async stockTotal() {
    const query = `
    select m.*, c."name" as "category" from "Menus" m
    join "Categories" c on c."id" = m."CategoryId"
    where "stock" = (select max("stock") from "Menus");
    `;

    const { rows } = await pool.query(query);
    return rows.map((el) => {
      const { id, name, price, stock, category, createdAt, CategoryId } = el;
      return new Menu(id, name, price, stock, category, createdAt, CategoryId);
    });
  }

  static async showMenuBurger() {
    const query = `
    select m.*, c."name" as "category" from "Menus" m
    join "Categories" c on c."id" = m."CategoryId"
    where m."name" ilike '%burger%';
    `;

    const { rows } = await pool.query(query);
    return rows.map((el) => {
      const { id, name, price, stock, category, createdAt, CategoryId } = el;
      return new Menu(id, name, price, stock, category, createdAt, CategoryId);
    });
  }

  static async stockTotalInDate() {
    const query = `
    select m.*, c."name" as "category" from "Menus" m
    join "Categories" c on c."id" = m."CategoryId"
    where "stock" = (select max("stock") from "Menus") and "createdAt" between '2021-06-02' and '2021-07-09';
    `;

    const { rows } = await pool.query(query);
    return rows.map((el) => {
      const { id, name, price, stock, category, createdAt, CategoryId } = el;
      return new Menu(id, name, price, stock, category, createdAt, CategoryId);
    });
  }
}

module.exports = Menu;
