class View {
  static showError(err) {
    console.log(err);
  }

  static showMenuDrink(allMenu) {
    console.table(
      allMenu.map((menu) => {
        return {
          name: menu.name,
          price: menu.price,
          stock: menu.stock,
          category: menu.category,
          createdAt: menu.createdAt,
        };
      })
    );
  }

  static showstockTotal(total) {
    console.table(
      total.map((menu) => {
        return {
          name: menu.name,
          price: menu.price,
          stock: menu.stock,
          category: menu.category,
          createdAt: menu.createdAt,
        };
      })
    );
  }

  static showMenuBurger(allMenu) {
    console.table(
      allMenu.map((menu) => {
        return {
          name: menu.name,
          price: menu.price,
          stock: menu.stock,
          category: menu.category,
          createdAt: menu.createdAt,
        };
      })
    );
  }

  static showStockTotalInDate(stock) {
    console.table(
      stock.map((menu) => {
        return {
          name: menu.name,
          price: menu.price,
          stock: menu.stock,
          category: menu.category,
          createdAt: menu.createdAt,
        };
      })
    );
  }

  static showHighIncome(income) {
    console.table(income);
  }
}

module.exports = View;
