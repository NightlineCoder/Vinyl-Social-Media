const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  // CODE GOES HERE
});

const User = model("User", userSchema);

module.exports = User;
