const express = require("express");

// 1. listen to port
// 2. load entries

const app = express();
// access env var
const port = process.env.PORT || 2000;
function loadApi() {
  return new Promise((resolve, reject) => {
    app.listen(port, () => {
      resolve();
    });
  });
}

function insertEP(route) {
  const { method, path, callback } = route;
  app[method](path, callback);
  //app.get("/users",()..)
}
module.exports = {
  loadApi,
  insertEP
};
