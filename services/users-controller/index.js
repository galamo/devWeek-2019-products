const data = require("./data");

class userController {
  static loadEntries(infra) {
    console.log("lading users entries.");
    const { app, logger } = infra;
    if (!app) return;
    const routes = [
      {
        path: "/users",
        method: "get",
        callback: (req, res, next) => {
          console.log(logger.info);
          logger.error("users request..");
          res.json(data.users);
        }
      }
    ];

    routes.forEach(route => {
      app.insertEP(route);
    });
  }
}

module.exports = {
  load: userController.loadEntries
};
