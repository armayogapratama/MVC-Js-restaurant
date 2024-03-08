const Menu = require("../models/menu");
const Category = require("../models/category");
const View = require("../views/index");

class Controller {
  static async showMenuDrink() {
    try {
      const allMenu = await Menu.showMenuDrink();
      View.showMenuDrink(allMenu);
    } catch (err) {
      View.showError(err);
    }
  }

  static async stockTotal() {
    try {
      const total = await Menu.stockTotal();
      View.showstockTotal(total);
    } catch (err) {
      View.showError(err);
    }
  }

  static async showMenuBurger() {
    try {
      const allMenu = await Menu.showMenuBurger();
      View.showMenuBurger(allMenu);
    } catch (err) {
      View.showError(err);
    }
  }

  static async stockTotalInDate() {
    try {
      const stock = await Menu.stockTotalInDate();
      View.showStockTotalInDate(stock);
    } catch (err) {
      View.showError(err);
    }
  }

  static async highIncome() {
    try {
      const income = await Category.highIncome();
      View.showHighIncome(income);
    } catch (err) {
      View.showError(err);
    }
  }
}

module.exports = Controller;
