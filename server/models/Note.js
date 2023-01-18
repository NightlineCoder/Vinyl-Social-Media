const { Schema, model } = require("mongoose");
// const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema({
  // CODE GOES HERE
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
