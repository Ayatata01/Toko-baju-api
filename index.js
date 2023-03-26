const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authentication = require("./routers/authentication");
const admin = require("./routers/admin");
const product = require("./routers/product");
const cart = require("./routers/cart");
const order = require("./routers/order");
const FILE = require("./helper/file");
const path = require("path");
require("dotenv");

// EXPRESS CONFIGURATION
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(FILE.upload.single("image"));

// CONFIGURATION FOR IMAGE URL SO CAN BE CALLED IN THE CLIENT
app.use("/images", express.static(path.join(__dirname, "images")));

// DATABASE CONFIGURATION
mongoose
  .connect(
    `(mongodb url)`
  )
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

// CORS CONFIGURATION
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization , x-api-key"
  );
  next();
});

app.listen(port, () => {
  console.log("listening on port", port);
});

// ROUTER CONFIGURATION
app.get("/", (req, res, next) => {
  res.json({ message: "Toko Baju API" });
});
app.use("/authentication", authentication);
app.use("/admin", admin);
app.use("/product", product);
app.use("/cart", cart);
app.use("/order", order);

module.exports = app;
