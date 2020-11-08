const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const rentalSchema = new Schema({
  username: {
    type: String,
    maxlength: [32, "Invalid lenght! Maximum is 32 characters"],
    minlength: [4, "Invalid lenght! Minimum is 4 characters"],
  },
  email: {
    type: String,
    required: "Email is required",
    lowercase: true,
    unique: true,
    match: [email_pattern],
    maxlength: [32, "Invalid lenght! Maximum is 32 characters"],
    minlength: [4, "Invalid lenght! Minimum is 4 characters"],
  },
  password: {
    type: String,
    required: "Password is required",
    maxlength: [32, "Invalid lenght! Maximum is 32 characters"],
    minlength: [4, "Invalid lenght! Minimum is 4 characters"],
  },
});

rentalSchema.statics.sendError = function (res, config) {
  const { status, detail } = config;
  return res
    .status(status)
    .send({ errors: [{ title: "User Error!", detail }] });
};

module.exports = mongoose.model("User", rentalSchema);
