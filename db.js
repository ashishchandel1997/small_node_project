const mongoose = require("mongoose");
require('dotenv').config()
// const mongoURL = process.env.DB_URL_LOCAL;
const mongoURL = process.env.DB_URL;



mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to database");
});

db.on("disconnected", () => {
  console.log("disconnected from database");
});
db.on("error", () => {
  console.log("connection error");
});

module.exports = db;
