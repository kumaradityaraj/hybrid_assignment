// Express is used for setting up the server and it is a js library and we are exporting this file so that we can use it other files

const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");

// Route imports
const product = require("./routes/productRoute");
app.use("/api/v1", product);

app.use(express.json());

// Middleware for error
app.use(errorMiddleware);

module.exports = app;
