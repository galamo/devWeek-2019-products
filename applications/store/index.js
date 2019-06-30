// this is the bootstrap file for our application
require("dotenv").config();

const app = require("../../services/api");
const usersController = require("../../services/users-controller");
const productsController = require("../../services/products-controller");
const logger = require("../../services/dgw19_logger");

app.loadApi();
const infra = { logger, app };
usersController.load(infra);
productsController.load(infra);
// .. productsControoler.load(infra)
console.log(process.env.PORT);
