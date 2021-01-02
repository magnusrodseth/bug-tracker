require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3500;

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (!error) {
      return console.log("Successfully connected to database.");
    }
    console.log(`An error occurred. ${error}`);
  }
);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/auth", require("./Controllers/Routes/Auth"));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
