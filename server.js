const express = require("express");

const bodyParser = require("body-parser");
require('dotenv').config()

const db = require("./db");
const app = express();
app.use(bodyParser.json());

const personRoutes = require("./Routes/personRoutes");
const menuRoutes = require("./Routes/menuRoutes");

app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

const PORT=process.env.PORT||3000

app.listen(PORT, () => {
  console.log("listing on 3000 port");
});
