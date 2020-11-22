const express = require("express");
const app = express();
const config = require("./config/dev");
const { provideErrorHandler } = require("./middleware");

const rentalRoutes = require("./routes/rentals");
const userRoutes = require("./routes/users");
const { onlyAuthUser } = require("./controllers/users");

const mongoose = require("mongoose");
require("./models/rental");
require("./models/user");

const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");

mongoose.connect(
  config.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("Connected to db");
  }
);

// parse application/json
app.use(bodyParser.json());
app.use(provideErrorHandler);

app.get("/api/v1/secret", onlyAuthUser, (req, res) => {
  return res.json({ message: "secret message" });
});

// API Routes
app.use("/api/v1/rentals", rentalRoutes);
app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
