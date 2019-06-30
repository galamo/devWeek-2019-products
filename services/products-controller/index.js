const data = require("./data");

class prodcutsController {
  static loadEntries(infra) {
    console.log("lading products entries.");
    const { app, logger } = infra;
    if (!app) return;
    const routes = [
      {
        path: "/products",
        method: "get",
        callback: (req, res, next) => {
          logger.info("req proucts");
          res.json(data.products);
        }
      }
    ];

    routes.forEach(route => {
      app.insertEP(route);
    });
  }
}

module.exports = {
  load: prodcutsController.loadEntries
};
