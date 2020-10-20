const config = require('./config/dev');
const mongoose = require('mongoose');
const FakeDB = require("./FakeDB");

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }, async () => {
    const fakeDB = new FakeDB();
    console.log("Starting populating db...")
    await fakeDB.populate();
    await mongoose.connection.close();
    console.log("Finishing  populating db...")
  });