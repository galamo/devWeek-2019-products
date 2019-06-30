const mongoose = require("mongoose");

const UsersModel = mongoose.model(
  "users",
  new mongoose.Schema({
    _id: String,
    name: String,
    gender: String,
    email: String
  })
);
function connect(infra) {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, err => {
      if (err) console.log("no connection....");
      //   resolve();
      loadDbOnInfra(infra);
    });
  });
}
function loadDbOnInfra(infra) {
  infra.db = {};
  infra.db.getUsers = getUsers;
}

function getUsers() {
  return new Promise((resolve, reject) => {
    UsersModel.find((err, res) => {
      resolve(res);
    });
  });
}
module.exports = {
  connect
};
