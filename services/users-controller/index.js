const data = require("./data");

class userController {
  static loadEntries(infra) {
    console.log("lading users entries.");
    const { app, logger, db } = infra;
    if (!app) return;
    const routes = [
      {
        path: "/users",
        method: "get",
        callback: async (req, res, next) => {
          const { app, logger, db } = infra;
          logger.error("users request..");
          const result = await db.getUsers();
          res.json(result);
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
