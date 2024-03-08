const pool = require("../db/connection");
const Controller = require("../controllers/index");

class Category {
  constructor(name, totalStock, totalSales) {
    this.name = name;
    this.totalStock = +totalStock;
    this.totalSales = +totalSales;
  }

  static async highIncome() {
    const query = `
    select c."name",
    sum(m."stock") as "totalStock",
    sum(m."stock" * m."price") as "totalSales"
    from "Menus" m
    join "Categories" c on c.id = m."CategoryId"
    group by c."name"
    having sum(m."stock" * m."price") > 3000000
    order by sum(m."stock" * m."price") desc;
    `;

    const { rows } = await pool.query(query);
    return rows.map((el) => {
      const { name, totalStock, totalSales } = el;
      return new Category(name, totalStock, totalSales);
    });
  }
}

module.exports = Category;
