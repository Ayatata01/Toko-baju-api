const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authentication = require("./routers/authentication");
require("dotenv");

// DATABASE CONFIGURATION
mongoose
  .connect(``)
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

// EXPRESS CONFIGURATION
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

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

app
  .listen(port)
  .then(() => {
    console.log("listening on port " + port);
  })
  .catch((error) => {
    console.log(error);
  });

// ROUTER CONFIGURATION
app.use("/authentication", authentication);

//  GLOBAL ERROR CONFIGURATION
app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({
    status: status,
    message: message,
    data: data,
  });
});
