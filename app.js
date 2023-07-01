const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const textRouter = require("./routes/api/text");

const app = express();

const { PORT, DBHOST } = process.env;

app.use(express.json());

// app.use(express.bodyParser());

app.use("/api/text", textRouter);

app.listen(PORT, () => {
  mongoose.connect(DBHOST);
  console.log(`Listening on port ${PORT}. Starting server.`);
});
