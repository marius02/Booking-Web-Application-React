const express = require("express");
const app = express();

const rentalRoutes = require("./routes/rentals");

const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");

// parse application/json
app.use(bodyParser.json());

// API Routes
app.use("/api/v1/rentals", rentalRoutes);

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
