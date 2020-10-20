const express = require("express");
const app = express();
const config = require('./config/dev');

const rentalRoutes = require("./routes/rentals");
const mongoose = require('mongoose');
const Rental = require('./models/rental');

const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, () => {
  console.log('Connected to db');
});

// parse application/json
app.use(bodyParser.json());

// API Routes
app.use("/api/v1/rentals", rentalRoutes);

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
