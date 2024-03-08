const Controller = require("./controllers/index");

const [cmd, ...params] = process.argv.slice(2);

switch (cmd) {
  case "query-1": {
    Controller.showMenuDrink();
    break;
  }

  case "query-2": {
    Controller.stockTotal();
    break;
  }

  case "query-3": {
    Controller.showMenuBurger();
    break;
  }

  case "query-4": {
    Controller.stockTotalInDate();
    break;
  }

  case "query-5": {
    Controller.highIncome();
    break;
  }
}
