const { Schema, model } = require("mongoose");
// const dateFormat = require('../utils/dateFormat');

const noteSchema = new Schema({
  // CODE GOES HERE
});

const note = model("note", noteSchema);

module.exports = note;
