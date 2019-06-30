// this is the bootstrap file for our application
require("dotenv").config();

const app = require("../../services/api");
const usersController = require("../../services/users-controller");
const productsController = require("../../services/products-controller");
const logger = require("../../services/dgw19_logger");
const db = require("../../services/db-connector");

app.loadApi();
const infra = { logger, app };
db.connect(infra);
usersController.load(infra);
productsController.load(infra);
